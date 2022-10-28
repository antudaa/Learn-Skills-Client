import React from 'react';
import { useLoaderData } from 'react-router-dom';
import jsPdf from 'jspdf';


const CheckOut = () => {

    const data = useLoaderData();
    console.log(data);

    const pdfGenerate = () => {
        var doc = new jsPdf("landscape", 'px', 'a4', 'false');
        doc.addImage(data.image_url)
        doc.text(data.details)

        doc.save('a.pdf')
    }

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
                                <button onClick={this.pdfGenerate} className="btn btn-success">Download PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;