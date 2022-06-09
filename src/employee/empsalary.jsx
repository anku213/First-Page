import { Table } from "react-bootstrap"
function EmpSalary() {

    return (
        <>
            <h4>Account Department</h4>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Shanu</td>
                        <td>Kumar</td>
                        <td>50000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>sanjeev</td>
                        <td>Kushwaha</td>
                        <td>55000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Prahlad </td>
                        <td>Singh</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Prince </td>
                        <td>Singh</td>
                        <td>100005</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default EmpSalary;