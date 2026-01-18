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

export default function Index() {

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
                            <tr>
                                <td className='px-4 py-2 text-center border'>1</td>
                                <td className='px-4 py-2 text-center border'>Phone</td>
                                <td className='px-4 py-2 text-center border'>This is mobile phone</td>
                                <td className='px-4 py-2 text-center border'>10000</td>
                                <td className='px-4 py-2 text-center border'></td>
                                <td className='px-4 py-2 text-center border'>2025-5-1</td>
                                <td className='px-4 py-2 text-center border'></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
