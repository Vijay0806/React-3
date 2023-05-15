import React, { useContext } from 'react'
import BasicCard from './CardComponents/BasicCard'
import ProgressCard from './CardComponents/ProgressCard';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './contextComponent/UserContextComponent ';
import { DashboardContext } from './contextComponent/DashboardContextComponent';

const Dashboard = () => {
    let context = useContext(UserContext);
    let dash = useContext(DashboardContext);
    let navigate = useNavigate();
    let handleDelete = (i) => {
        let newArray = [...context.users]
        newArray.splice(i, 1)
        context.setUsers(newArray)


    }

    return <>
        <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    <BasicCard label="Earnings (Monthly)" value={dash.earningsMonthly} icon='fa-calendar' border='primary' titleColor='primary' />
                    <BasicCard label="Earnings (Yearly)" value={dash.earningsYearly} icon='fa-dollar-sign' border='success' titleColor='success' />
                    <ProgressCard label="Tasks" value={dash.task} icon='fa-clipboard-list' border='info' />
                    <BasicCard label="Pending Requests" value={dash.pendingRequest} icon='fa-comments' border='warning' titleColor='warning' />
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Mobile</td>
                            <td>Batch</td>
                            <td>Timings</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            context.users.map((e, i) => {
                                // unique key prop
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.batch}</td>
                                    <td>{e.timings}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => navigate(`/edit-user/${i}`)}><i className="fas fa-pen-to-square" style={{ paddingRight: "5px" }}></i>Edit</button>
                                        &nbsp; &nbsp;
                                        <button className=" btn btn-danger" onClick={() => handleDelete(i)}> <i className="fas fa-trash" style={{ paddingRight: "5px" }}></i>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
    </>



}

export default Dashboard