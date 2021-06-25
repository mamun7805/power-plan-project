import React from 'react';




const  Contact = ()=>{



    return(
        <>  

               <div className = "jumbotron m-0">
                    <div className = "row">

                    	<div className = "col-md"> </div>
                    	<div className = "col-md">
                    	   <h3 className = "text-center"> Send Your Message  </h3>
                    		<form>
                    			<label> Name </label>
                    			<input className = "form-control" type = 'text' />
                    			<label> Email </label>
                    			<input className = "form-control" type = 'text' />
                    			<label> Message </label>
                    			<textarea className = "form-control" rows = "5" />
                    			<hr/>

                    			<button className = "btn" style = {{background : "#009900", color : "white"}}> Submit </button>
                    			
                    		</form>

                    	 </div>
                    	<div className = "col-md"> </div>

                    </div>
               </div>


        </>

    )
}

export default Contact;