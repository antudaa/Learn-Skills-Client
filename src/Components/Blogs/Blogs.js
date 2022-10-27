import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='text-4xl text-sky-400 text-center my-8'>
                <h1>Welcome To Our Blog Page</h1>
            </div>
            <div>
                <div className="collapse my-6 mx-auto rounded-lg" style={{ width: "60%" }}>
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray peer-checked:text-white">
                        What is Cors?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray peer-checked:text-white">
                        <p>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.    <br />
                            <strong>Used For</strong> <br /> What is CORS used for?
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources
                        </p>
                    </div>
                </div>
                <div className="collapse my-6 mx-auto rounded-lg" style={{ width: "60%" }}>
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray peer-checked:text-white">
                        Reason of Using Firebase For Authentication
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray peer-checked:text-white">
                        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br />
                            <strong>Other Options</strong> <br />
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                        </p>
                    </div>
                </div>
                <div className="collapse my-6 mx-auto rounded-lg" style={{ width: "60%" }}>
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray peer-checked:text-white">
                        Working Process Of Private Route!
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray peer-checked:text-white">
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). <br /> Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.</p>
                    </div>
                </div>
                <div className="collapse my-6 mx-auto rounded-lg" style={{ width: "60%" }}>
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray peer-checked:text-white">
                        What is Node? How does Node work?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray peer-checked:text-white">
                        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;