import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './contextComponent/UserContextComponent ';

export const EditUser = () => {
    let { id } = useParams()
    let context = useContext(UserContext);

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [mobile, setMobile] = useState("")
    let [batch, setBatch] = useState("")
    let [timings, setTimings] = useState("")

    let navigate = useNavigate()

    let handleSubmit = () => {
        let newData = { name, email, mobile, batch, timings }
        let newArray = [...context.users]
        newArray.splice(id, 1, newData)//deep copy the main array
        context.setUsers(newArray)//Delete the ele in the new arr
        navigate('/dashboard')//update the new arr to the state fn.
    }
    useEffect(() => {
        if (id) {
            setName(context.users[id].name)
            setEmail(context.users[id].email)
            setMobile(context.users[id].mobile)
            setBatch(context.users[id].batch)
            setTimings(context.users[id].timings)
        }
        else {
            navigate('/dashboard')
        }
    }, [id, navigate, context])

    return (
        <>
            <div className='container-fluid'>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" value={mobile} placeholder="Enter Number" onChange={(e) => setMobile(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Batch</Form.Label>
                        <Form.Control type="text" value={batch} placeholder="Enter Batch" onChange={(e) => setBatch(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Session timings</Form.Label>
                        <Form.Select defaultValue={timings ? timings : "0"} onChange={(e) => setTimings(e.target.value)}>
                            <option value="0" disabled>Session Timings</option>
                            <option value="08am to 10am">08am to 10am</option>
                            <option value="10am to 12pm">10am to 12pm</option>
                            <option value="12pm to 2pm">12pm to 2pm</option>
                            <option value="2pm to 4pm">2pm to 4pm</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Submit
                    </Button>
                </Form>

            </div>
        </>
    )
}

