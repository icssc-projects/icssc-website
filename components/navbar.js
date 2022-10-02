import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar variant="dark" fixed="top" expand="lg" style={{ backgroundColor: "#535D93", boxShadow:"0px .5px 10px"}}>
            <Navbar.Brand href="/index">
                <svg height="43px" viewBox="0 0 469 117" fill="#ff87a6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V116H116V0H0ZM96.7759 53.7631C96.6744 54.143 87.1769 71.5778 86.9362 71.9954C86.7477 72.3231 85.898 73.66 85.6718 73.8369C85.4369 74.0109 84.7003 74.4053 84.3204 74.4372C83.9405 74.4604 72.9756 74.3502 72.9756 74.3502C72.9756 74.3502 72.5667 75.1013 72.6189 75.1767C72.6711 75.2492 72.7929 75.3826 72.7929 75.3826C72.7929 75.3826 82.215 75.4058 82.6471 75.5073C83.0792 75.6088 83.8448 75.5595 84.2769 76.1714C84.709 76.7775 84.912 76.6238 85.0889 78.1057C85.2716 79.5818 85.2252 81.1507 85.1411 82.1222C85.0454 83.2213 84.8221 83.9927 84.6307 84.535C84.2392 85.6399 83.694 86.4519 83.0589 86.9043C82.4151 87.3654 79.924 88.0295 78.8075 88.3282C77.6823 88.6356 74.8838 89.3519 72.4884 89.3519C70.093 89.3519 68.8808 89.2504 66.8421 89.0445C64.8034 88.8386 63.771 88.7748 62.9706 88.5341C62.1006 88.2702 60.5433 87.8352 59.6965 88.0411C58.8555 88.247 58.493 88.5341 57.5708 88.7893C56.6573 89.0445 54.8738 89.1228 54.056 89.0967C53.4789 89.0764 51.4286 89.1199 49.6857 88.6994C48.053 88.3021 46.7161 87.4379 46.4203 87.2639C45.1994 86.5476 44.3236 85.8748 43.3318 84.9352C42.7315 84.3668 42.5952 84.4016 42.1051 83.9637C41.9224 83.7955 41.644 84.6278 41.0466 85.4833C40.31 86.5418 39.5705 87.0899 38.9789 87.5713C37.5318 88.7545 35.8005 89.3258 34.5738 89.3548C33.3529 89.378 31.4766 89.1199 30.4616 88.6327C29.6583 88.2528 27.8748 86.9014 26.9845 86.0546C25.6186 84.7612 23.3334 81.8119 22.7621 80.765C20.8858 77.2821 19.8331 74.791 19.5779 73.0597C18.8268 68.0862 18.9863 65.3979 19.2125 63.2345C19.5199 60.2823 20.6944 56.5355 21.17 55.1928C21.8138 53.3948 23.3682 51.1473 23.8061 50.4223C24.244 49.6915 24.9284 48.8099 25.2155 48.4039C25.3605 48.2009 26.1551 47.3222 26.4161 47.0177C26.5002 46.9191 26.9091 46.487 26.9091 46.487C26.9091 46.487 27.6718 45.7591 27.7472 45.6895C27.9531 45.5039 28.5389 44.9993 28.8608 44.8108C29.7453 44.2917 30.2035 44.8833 30.2847 45.1617C30.3282 45.3444 30.3949 45.4546 30.3137 46.0665C30.1977 46.951 30.1165 47.2874 30.0788 47.8123C30.0672 47.995 30.0237 48.3401 30.0121 48.6214C30.0005 48.9027 30.0121 49.9786 30.0179 50.1758C30.0295 50.46 30.1165 51.2807 30.1542 51.5707C30.1919 51.8607 30.2644 52.4987 30.3253 52.8438C30.392 53.2324 30.4819 53.8646 30.5312 54.0995C30.5573 54.2271 30.6965 54.8825 30.7139 54.9521C30.7545 55.1087 30.8299 55.3494 30.9952 55.854C31.0561 56.0396 31.1808 56.3731 31.2504 56.5123C31.3867 56.7994 31.6912 57.3649 31.7869 57.3649C31.9435 57.3649 32.0682 56.6167 32.103 56.318C32.1175 56.1962 32.1262 56.0338 32.103 55.8308C32.0508 55.3726 31.9406 55.1754 31.8826 54.8825C31.8449 54.694 31.7492 54.5113 31.7434 54.1923C31.7395 54.0183 31.7753 53.882 31.8507 53.7834C31.9232 53.6877 32.2016 53.7022 32.3089 53.7486C32.451 53.8095 32.5554 53.8269 32.8193 54.0183C34.191 55.0101 34.5477 55.6626 34.5477 55.6626C35.235 56.6457 35.6642 57.3968 36.1398 58.5481C36.308 58.9541 36.6821 59.9401 37.2273 61.915C37.2447 61.9788 37.5434 63.1649 37.6826 63.6869C37.7406 63.9073 37.8827 64.8643 37.9117 65.047C37.9407 65.2297 38.0074 65.8532 38.0248 65.9547C38.0625 66.2041 38.2597 68.1674 38.2597 68.1674C38.2597 68.1674 39.4197 60.4389 40.7943 56.2397C42.1689 52.0405 46.0607 44.9413 46.5943 43.7929C47.1337 42.6474 48.952 39.7184 49.6103 38.6686C50.5354 37.1925 51.7128 35.6149 52.3218 34.481C53.2092 32.8251 53.7022 32.567 53.7747 31.5752C53.8559 30.5892 54.0009 28.9826 54.462 28.3678C54.9231 27.7617 55.7409 26.9961 56.6428 26.796C57.4461 26.6162 58.377 26.564 59.1977 26.9439C60.0184 27.3238 60.2649 27.6167 60.6187 28.0546C60.9725 28.4925 61.0305 29.0319 61.4394 29.4408C61.8483 29.8497 63.887 30.6617 65.3109 31.3258L66.7348 31.9841C66.7348 31.9841 69.3709 33.176 70.2583 33.8488C71.3371 34.6695 73.1467 36.3138 74.1124 37.3288C75.0839 38.3438 77.9317 41.6005 79.0511 44.1003C80.1763 46.5914 80.4576 47.0554 80.9361 48.6794C81.5567 50.7848 81.7278 51.8781 81.4465 52.9076C81.4407 52.9337 81.4291 52.9743 81.4117 53.0265C81.3334 53.2904 81.0115 54.288 80.0313 54.868C79.8689 54.9637 79.4919 55.1812 78.9612 55.2334C78.619 55.2653 78.3638 55.216 78.0854 55.1609C77.3604 55.0159 76.8326 54.7491 76.6847 54.636C76.154 54.2387 75.6349 53.6906 75.3101 53.4383C75.2086 53.3861 73.5266 52.2174 72.79 51.9129C72.0534 51.6084 71.0355 50.9936 70.2699 50.7674C69.5101 50.5412 68.3124 50.0511 67.9847 50.0511C67.657 50.0511 67.0132 49.7524 66.4593 49.7727C65.8967 49.8017 65.5168 49.8249 65.2616 50.2048C65.0064 50.5905 64.7512 50.7384 64.873 51.301C65.0035 51.8636 65.0789 52.6756 65.4124 53.4412C65.9112 54.578 66.1113 55.1667 66.4999 55.8598C67.7498 58.087 68.4139 58.3422 69.6696 60.3374C70.9601 62.3877 71.5691 64.2031 71.8968 65.2007C72.1694 66.033 72.5754 67.2365 72.6856 68.5618C72.7668 69.5246 72.8161 70.1394 72.8161 70.1394C72.8161 70.1394 72.6856 70.2641 72.9901 70.4178L73.2975 70.5715L77.8563 71.1341L82.9255 71.4908L83.4156 71.2269L93.4583 52.9308C93.4583 52.9308 93.4815 52.8293 93.6642 52.8061C93.8382 52.7771 93.7164 52.7771 93.8382 52.7771C93.96 52.7771 96.7672 52.8293 96.9209 52.9598C97.0746 53.0845 96.8687 53.3919 96.7672 53.7718L96.7759 53.7631Z"/>
                </svg>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="collapsable-navbar" />
            <Navbar.Collapse id="collapsable-navbar">
                <Nav className="ml-auto mt2 mt-lg-0">
                    <NavDropdown title='About Us' id='about-us-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/mission">Our Mission</NavDropdown.Item>
                        <NavDropdown.Item href="/awards">Awards and Recognitions</NavDropdown.Item>
                        <NavDropdown.Item href="/committees">Committees</NavDropdown.Item>
                        <NavDropdown.Item href="/board">Board Members</NavDropdown.Item>
                        <NavDropdown.Item href="/past-board">Past Board Members</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Get Involved' id='get-involved-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                        <NavDropdown.Item href="/humans-of-ics/home">Humans of ICS</NavDropdown.Item>
                        <NavDropdown.Item href="/ics-podcast">ICS Podcast</NavDropdown.Item>
                        <NavDropdown.Item href="/discord">Join Our Discord</NavDropdown.Item>
                        <NavDropdown.Item href="/get-involved">Join Our Committees</NavDropdown.Item>
                        <NavDropdown.Item href="/newsletter">Join Our Newsletter</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Election' id='election-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/candidates">Candidates</NavDropdown.Item>
                        {/* <NavDropdown.Item href="">Vote!</NavDropdown.Item> */}
                    </NavDropdown>
                    <NavDropdown title='Our Partners' id='partners-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/affiliates">Affiliates</NavDropdown.Item>
                        <NavDropdown.Item href="/sponsors">Sponsors</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item title="Contact Us" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/contacts">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}