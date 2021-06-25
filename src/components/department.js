import React from 'react';
import {Bar, Pie } from 'react-chartjs-2'




const Department = ()=> {

	        
   var data = {
        labels: ["Management", "Administration", "Finance", "Production", "IT", "Marketing"],
        datasets: [{
            label: 'Employee Count By Department',
            data: [100, 300, 800, 200, 50, 500],
            backgroundColor: [
                'rgb(255, 125, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 180, 210)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor:"black"
         
        }]
    }
    

  const options = {
    responsive: true, 
    maintainAspectRatio: false
}
   


    return(
        <>

           <div className = "jumbotron m-0">
           	  <div className = "row">
           	  	<div className = "col-md bg-white">
           	  	   <Bar 
           	  	   	  data = {data}
           	  	   	  options = {options}
           	  	   	  height = {400}
           	  	   	  width = {500}
           	  	   

           	  	   />


           	  	</div>
           	  	<div className = "col-md bg-white">
           	  	   
 				  <Pie
 				  	data = {data}
 				  	options = {options}
 				  	width = {500}
 				  	height = {500}
 				  	
 				  

 				   />
           	  	</div>


           	  </div> 





               

           </div>


        </>

    )
}

export default Department;