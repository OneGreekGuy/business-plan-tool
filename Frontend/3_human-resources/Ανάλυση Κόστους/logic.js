var app = new Vue({
	el: 'main',
	data: {
		costs: [],
		workers: [],
		calculatedCostLabel: null,
		nameLabel: null,
		occupationLabel: null,
		workersCounter: -1,
		
	},
	methods: {
		create() {
			this.workersCounter++;
			var newCost = { payment:'', bonus:'' , paymentType:'', workType:''};
			this.costs.push(newCost);
			//Test mockups-will be replaced by workers table.
			this.nameLabel='John -'
			this.occupationLabel='hello'
			/*Workers is the table formed by the orgChart.*/

			//this.nameLabel = this.workers[this.workersCounter].name;
			//this.occupationLabel = this.workers[this.workersCounter].occupation;
		},
		calculate() {
			
			var totalCost = 0;
			for (var i=0 ; i < this.costs.length ; i++ ) {
				if (this.costs[i].paymentType === "monthpay") 
					totalCost += parseInt(this.costs[i].payment) * 14 + parseInt(this.costs[i].bonus);
				else if (this.costs[i].paymentType === "daypay") 
					if (this.costs[i].workType === "fulltime") 
						totalCost += parseInt(this.costs[i].payment) * 300 + parseInt(this.costs[i].bonus);
				    else //if workType is partTime{
					    totalCost += parseInt(this.costs[i].payment) * 150 + parseInt(this.costs[i].bonus);
				}

			this.calculatedCostLabel = totalCost;
			console.log(totalCost);	
			},
		}
	})
