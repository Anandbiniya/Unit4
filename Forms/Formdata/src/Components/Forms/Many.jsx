import React from "react";
import { useState } from "react";

function Many() {
  const [data, setData] = useState({
    username: "",
    fullname: "",
    email: "",
    pass: "",
    phone: "",
    salary:""
  });

  const [record, setRecord] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const user = e.target.value;
    console.log(user,name)
    setData({
      ...data,
      [name]: user,
    });
  };
  const handleHappen = (e) => {
    e.preventDefault();
    const newrecord = {
      ...data,
      id: new Date().getTime().toString(),
    };
    // console.log(data)
    
    setRecord([...record, newrecord]);
    // console.log(record)
    
    setData({
      username: "",
      fullname: "",
      email: "",
      pass: "",
      phone: "",
      salary:""
    });
  };

  return (
    <>
      <form action="" onSubmit={handleHappen}>
        <div>
          <label htmlFor="username">Username</label>

          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={data.username}
          />
        </div>
        <div>
          <label htmlFor="fullname">Name</label>

          <input
            type="text"
            
            name="fullname"
            value={data.fullname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Age
</label>

          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div>
          <label htmlFor="pass">Address</label>

          <input
            type="text"
            name="pass"
            onChange={handleChange}
            value={data.pass}
          />
        </div>
        <div>
          <label htmlFor="phone">Department</label>

          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={data.phone}
          />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>

          <input
            type="text"
            name="salary"
            onChange={handleChange}
            value={data.salary}
          />
        </div>
       
        <select>
            <option value="check">Male</option>
            <option value="check">female</option>
        </select>
        <button type="submit">Registration</button>
      </form>
      <div>
        {record.map((item) => {
            return(
          <table>
            <th></th>
            <tbody>
                <tr>
                    <th>Name</th><th>Full</th><th>email</th><th>phone</th><th>Name</th>
                </tr>
                <tr>
                    <td>{item.username}</td>
                    <td>{item.fullname}</td>
                    <td>{item.email}</td>
                    <td>{item.pass}</td>
                    <td>{item.phone}</td>
                    <td>{item.salary}</td>

    
                </tr>

            </tbody>
          </table>
            )
        })}
        
      </div>
    </>
  );
}

export default Many;
