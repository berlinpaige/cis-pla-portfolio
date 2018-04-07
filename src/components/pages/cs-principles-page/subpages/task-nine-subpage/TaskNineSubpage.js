import React, { Component } from 'react';
import './TaskNineSubpage.css';


class TaskNineSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Explain how the Internet functions, including underlying abstractions, cybersecurity 
                    concerns,and how its characteristics influence systems built on it</h1>
                <p>The Internet is a network of independent computers and other hardware devices connected 
                    together. You can think of this as a bunch of wires that let computers around the world communicate 
                    with one another. Connected to these wires are other devices, like servers, routers, and 
                    switches which help make the Internet work. Because of the diversity in hardware used throughout 
                    the world, the internet uses a set of protocols when sending and receiving information.</p>
                <h2>Let's look at what's involved when a user visits my company's website <a href="https://www.craftsy.com/">https://www.craftsy.com/</a></h2>
                <p>Let's say you are wirelessly connected to the internet at your house. After typing the URL into the browser, 
                    the browser uses the Hypertext Transfer Protocol (HTTP), a set of rules for asking for and getting web pages. 
                    Additionally, Transmission Control Protocol (TCP) and Internet Protocol (IP) are used for sending and receiving 
                    data like emails, web pages, or files on the internet. Once you initiate your request TCP IP protocols take your 
                    request and breaks it up into little packets of data and then sends the packets in the fastest way possible from 
                    client to server and back again.</p>
                <p>The hardware for this works as follows: After you request a web page, TCP IP sends your request wirelessly using 
                    radio waves either to a router or directly to a wireless modem. Your modem then sends the packets along a coaxial 
                    cable or phone line to the outside of your house where your internet service provider connects you to the Internet, 
                    the main network made of fiber optic cables and computers. Once it reaches this point your request is now sent from 
                    one server to another until it reaches the server that's hosting the website you wanted. Then, the web page you requested 
                    is returned in just the same way. If this all happens correctly, the packets of data arrive, are reassembled, and
                    the web browser shows you a perfect copy of the web page.</p>
                <h2>a quick peek at cybersecurity</h2>
                <p>When we do a Google search we may only consider this an exchange between ourselves 
                    and Google. The reality is that, many more people and devices are involved in these 
                    exchanges, and a lot more information is transmitted. Consider you're in a coffee shop 
                    with a laptop. Let's say the coffee shop has an open WiFi (no passowrd required), and other people in 
                    the coffee shop are also using the internet. You do a google search 
                    for puppy adoption locations in your area. The text of your search is sent from the 
                    laptop to the coffee shop wifi, to the local ISP, to the Google data center, and processed. 
                    Puppy adoption locations are now shown in the browser. Much of the activity on an open wifi 
                    network is exposed to everyone else on the same network. If the search engine wasn't protected 
                    with HTTPS, then another person in the coffee shop could even see the search terms.</p>
                <p>Additionally, there are a lot of hops the search may take for a full round trip. While most 
                    of these nodes are secure, if an attacker gains access to one, they could expose web traffic. 
                    ISPs have access to that web traffic as well, and some laws allow them to sell that information 
                    to anyone. By searching with HTTPS, the content of the search was encrypted all the way to the google 
                    servers. Google then decrypts this and has access to it. It will provide puppy adoption locations as 
                    requested, but may also record history of searches and may serve up advertisements for puppy goods.</p>
            </div>
        );
    }
}

export default TaskNineSubpage;
