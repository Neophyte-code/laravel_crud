import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTextarea } from '@/components/ui/custom-textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import products from '@/routes/products';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Products',
        href: '/products',
    },
];

export default function ProductForm() {
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
                        <form className='flex flex-col gap-4' autoComplete='off'>
                            <div className='grid gap-6'>

                                {/* Product name */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='name'>Product name</Label>
                                    <Input
                                    id='name'
                                    name='name'
                                    type='text'
                                    placeholder='Product name'
                                    autoFocus
                                    tabIndex={1}
                                    />
                                </div>

                                {/* Description */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='description'>Description</Label>

                                    <CustomTextarea 
                                    id='description' 
                                    name='description' 
                                    tabIndex={2} 
                                    placeholder='Product description'
                                    />
                                </div>

                                 {/* Product Price */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='price'>Product price</Label>
                                    <Input
                                    id='price'
                                    name='price'
                                    type='text'
                                    placeholder='Product price'
                                    autoFocus
                                    tabIndex={3}
                                    />
                                </div>

                                 {/* Featured Image */}
                                <div className='grid gap-2'>
                                    <Label htmlFor='featured_image'>Featured image</Label>
                                    <Input
                                    id='featured_image'
                                    name='featured_image'
                                    type='file'
                                    autoFocus
                                    tabIndex={4}
                                    />
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
