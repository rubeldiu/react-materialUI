import { Grid} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import Controls from '../../components/controls/Controls';
import {useForm,Form} from '../../components/useForm';
import * as employeeService from "../../services/employeeService";


const genderItems=[
    {id:'male',title:'Male'},
    {id:'female',title:'FeMale'},
    {id:'other',title:'Other'},
]
const initialFValues={
    id:0,
    fullname:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate:new Date(),
    isPermanent:false
}

export default function EmployeeForm() {
    const {values,setValues,handleInputChange}=useForm(initialFValues);
    //const classes=useStyle();
   

    return (
        
            <Form>
            <Grid container>
                <Grid item xs={6}>
                       <Controls.Input
                       name="fullname"
                       label="Full Name"
                       value={values.fullname}
                       onChange={handleInputChange}
                       />
                       <Controls.Input
                       name="email"
                       label="Email Address"
                       value={values.email}
                       onChange={handleInputChange}
                       />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                       name="gender"
                       label="Gender"
                       value={values.gender} 
                       onChange={handleInputChange}
                       items={genderItems}
                    />
                    <Controls.Select
                    name="departmentId"
                    label="Department"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={employeeService.getDepartmentCollection()}
                   />
                  
                </Grid>

            </Grid>
            </Form>
       
    )
}
