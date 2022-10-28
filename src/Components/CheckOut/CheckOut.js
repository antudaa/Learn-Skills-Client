import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'row',
//         backgroundColor: '#E4E4E4'
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//     }
// });


const CheckOut = () => {

    const data = useLoaderData();
    console.log(data);

    // Create Document Component
    // const MyDocument = () => (
    //     <Document>
    //         <Page size="A4" style={styles.page}>
    //             <View style={styles.section}>
    //                 <Text>data.title</Text>
    //             </View>
    //             <View style={styles.section}>
    //                 <Text>data.details</Text>
    //             </View>
    //         </Page>
    //     </Document>
    // );


    return (
        <div className='text-4xl text-sky-400 text-center my-8'>
            <h1>This Course Is Related With {data.course_title}</h1>
            <div className='flex justify-center my-16'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={data.image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{data.title}</h2>
                        <p className='text-justify my-4'>{data.details}</p>
                        <div className='flex justify-between'>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Learn More ?</button>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-success">Download PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;