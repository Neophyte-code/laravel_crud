import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

interface Product{
    id: number,
    name: string,
    description: string,
    price: number,
    featured_image: string,
    created_at: string
}

export default function Index({...props}: {products: Product[]} ) {
    const { products } = props; 

    const { flash } = usePage<{ flash?: { success?: string; error?: string }}>().props;
    const flashMessage = flash?.success || flash?.error
    const [ showAlert, setShowAlert ] = useState( flashMessage ? true : false);

    useEffect(() => {
        if(flashMessage){
            const timer = setTimeout(() => {
                setShowAlert(false)
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [flashMessage]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

            { showAlert && flashMessage && (
            <Alert variant={'default'} className={`${flash?.success ? 'bg-green-600' : (flash?.error ? 'bg-red-600' : '')} ml-auto w-auto text-white`}>
                <AlertDescription className='font-bold text-white'>{ flash.success ? 'Success!' : 'Error!'} {' '} { flashMessage }</AlertDescription>
            </Alert>
            )}

                <div className='ml-auto'>
                    <Link className='bg-indigo-700 px-2 py-2 rounded-lg text-white text-md cursor-pointer hover:opacity-90' as='button' href={'/products/create'}>Add Product</Link>
                </div>

                <div className='overflow-hidden rounded-lg border bg-white shadow-sm'>
                    <table className='w-full table-auto'>
                        <thead>
                            <tr className='bg-gray-700 text-white'>
                                <th className='p-4 border'>#</th>
                                <th className='p-4 border'>Name</th>
                                <th className='p-4 border'>Description</th>
                                <th className='p-4 border'>Price</th>
                                <th className='p-4 border'>Featured Image</th>
                                <th className='p-4 border'>Created Date</th>
                                <th className='p-4 border'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                <td className='px-4 py-2 text-center border'>{ index + 1}</td>
                                <td className='px-4 py-2 text-center border'>{ product.name }</td>
                                <td className='px-4 py-2 text-center border'>{ product.description }</td>
                                <td className='px-4 py-2 text-center border'>{ product.price }</td>
                                <td className='px-4 py-2 text-center border'>
                                    <img src={product.featured_image} alt={product.name} className='h-16 w-16 object-cover'/>
                                </td>
                                <td className='px-4 py-2 text-center border'>{ product.created_at }</td>
                                <td className='px-4 py-2 text-center border'></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
