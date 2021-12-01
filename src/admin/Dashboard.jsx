import { Tab, Row, Col, Nav } from 'react-bootstrap'
import TransactionHistory from './components/TransactionHistory'
import WidthdrawlHistory from './components/Widthdrawl'
import Logout from './components/Logout'
import UserList from './components/UserList'
import Setting from './components/Setting'


export default function AdminDashboard() {
    return (
        <div className="section">

            
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">User List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Transaction History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="widthdrawl">Withdrawal History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="setting">Setting</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="logout">Logout</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <UserList />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <TransactionHistory />
                </Tab.Pane>
                <Tab.Pane eventKey="widthdrawl">
                    <WidthdrawlHistory />
                </Tab.Pane>
                <Tab.Pane eventKey="setting">
                    <Setting />
                </Tab.Pane>
                <Tab.Pane eventKey="logout">
                    <Logout />
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>

        </div>
    )
}





