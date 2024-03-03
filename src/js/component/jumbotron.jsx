import React from 'react';

const Jumbotron = () => {
	return (
		<div>
			<h1 style={{ marginBottom: '20px' }}>
                A Warm Welcome!
            </h1>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <div style={{marginTop: "20px"}}>
            <button style={{width: "150px", height:"40px", marginBottom: "40px"}} type="button" class="btn btn-primary">Call to action!</button>
            
            </div>
            
		</div>
	);
};


export default Jumbotron;