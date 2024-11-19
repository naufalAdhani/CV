import { Navbar } from "flowbite-react";

export function Header() {
    return (
        <Navbar fluid className="dark:bg-white">
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold">CV Naufal</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="Contact.jsx">Contact</Navbar.Link>
                <Navbar.Link href="#">My Skills</Navbar.Link>
                <Navbar.Link href="#">Linkendln</Navbar.Link>
                <Navbar.Link href="#">Github</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
