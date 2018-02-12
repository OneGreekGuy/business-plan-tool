

var app = new Vue({
	el: 'main',
	data: {
		costs: [],
		/*Workers is the table formed by the orgChart.*/
		workers:[],
		calculatedCostLabel: null,
		nameLabel: null,
		occupationLabel: null,
		workersCounter: -1,
		
		
	},
	methods: {

		doSomething(data) {
			this.workersCounter++;
			
			this.workers=data;		
			

			this.nameLabel = this.workers[this.workersCounter].ID + " -";
			this.occupationLabel = this.workers[this.workersCounter].Job;
			
			var newCost = { payment:'', bonus:'' , paymentType:'', workType:''};
			this.costs.push(newCost);
			
			if (this.workersCounter + 1 == this.workers.length) {
				document.getElementById('plus__member').style.visibility="hidden";
				document.getElementById('plus__member').disabled = true;
			}

		},



		getData() {
			self=this;
			Promise.resolve(axios.get('http://localhost:52800/api/Employee'))
			.then(function (result) {
				self.doSomething(result.data);
				console.log(result.data)
			});
		},

		

		create() {
			this.getData();
		},


		showInstructions() {

			var modal = document.getElementById("myInstructions1");

             // Get the button that opens the modal
             var btn = document.getElementById("Instructions");

			// Get the <span> element that closes the modal		
			var span = document.getElementsByClassName("close")[0];

				// When the user clicks the button, open the modal 
				modal.style.display = "block"
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
					modal.style.display = "none";
				}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
		},

		calculate() {
			var totalCost = 0;
			for (var i=0 ; i < this.costs.length ; i++ ) {

				
				axios.post('http://localhost:52800/api/EmployeeSalary',{

					EmployeeID: i+1,
					Salary: this.costs[i].payment,
					Bonus: this.costs[i].bonus,
					Employment_type: this.costs[i].workType
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
				if (this.costs[i].paymentType === "monthpay") 
					totalCost += parseInt(this.costs[i].payment) * 14 + parseInt(this.costs[i].bonus);
				else if (this.costs[i].paymentType === "daypay") 
					if (this.costs[i].workType === "fulltime") 
						totalCost += parseInt(this.costs[i].payment) * 300 + parseInt(this.costs[i].bonus);
				    else //if workType is partTime{
				    	totalCost += parseInt(this.costs[i].payment) * 150 + parseInt(this.costs[i].bonus);
				    }

				    this.calculatedCostLabel = totalCost + '€';
				    console.log(totalCost);	
				},
			},

		})
