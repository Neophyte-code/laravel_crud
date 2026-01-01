import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTextarea } from '@/components/ui/custom-textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import products from '@/routes/products';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Description } from '@radix-ui/react-dialog';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Products',
        href: '/products',
    },
];

export default function ProductForm() {

    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        description: '',
        price: '',
        featured_image: null as File | null
    });

    // form submit handler
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        // prevent  the  page from  reloading
        e.preventDefault();
            //route(products.store)
        post('/products', {
            onSuccess: () => console.log('form submitted')
        })
    }

    //handle file upload
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0){
            setData('featured_image', e.target.files[0])
        }
        }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Products" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

                <div className='ml-auto'>
                <Link as={'button'} className='bg-indigo-700 px-2 py-2 rounded-lg text-white text-md cursor-pointer hover:opacity-90' href={'/products'}>Back to products</Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Create Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className='flex flex-col gap-4' autoComplete='off'>
                            <div className='grid gap-6'>

                                {/* Product name */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='name'>Product name</Label>
                                    <Input 
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    id='name'
                                    name='name'
                                    type='text'
                                    placeholder='Product name'
                                    autoFocus
                                    tabIndex={1}
                                    />

                                    <InputError message={errors.name}/>
                                </div>
                                

                                {/* Description */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='description'>Description</Label>

                                    <CustomTextarea 
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    id='description' 
                                    name='description' 
                                    tabIndex={2} 
                                    placeholder='Product description'
                                    />

                                    <InputError message={errors.description} />
                                </div>
                                

                                 {/* Product Price */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='price'>Product price</Label>

                                    <Input
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    id='price'
                                    name='price'
                                    type='text'
                                    placeholder='Product price'
                                    autoFocus
                                    tabIndex={3}
                                    />

                                    <InputError message={errors.price} />
                                </div>
                                


                                 {/* Featured Image */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='featured_image'>Featured image</Label>
                                    <Input
                                    onChange={handleFileUpload}
                                    id='featured_image'
                                    name='featured_image'
                                    type='file'
                                    autoFocus
                                    tabIndex={4}
                                    />

                                    <InputError message={errors.featured_image} />
                                </div>

                                

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="mt-4 w-fit cursor-pointer"
                                    tabIndex={4}
                                    data-test="login-button"
                                    >
                                    {/* {processing && <Spinner />} */}
                                    Save Product
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
