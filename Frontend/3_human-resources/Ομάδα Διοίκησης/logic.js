var app = new Vue({
  el: 'main',
  data: {
    managers: [],
    jobOptions: ['CEO', 'CTO', 'CFO']
  },
  methods: {
    create() {
      var newManager = { name: '', surName: '', job: '', linkedIn: '' }
      this.managers.push(newManager)
    },
    save() {
      console.log('Οι managers που αποθηκεύτηκαν είναι:')
      console.log(this.managers)
    },

    showInstructions() {
      var modal = document.getElementById("myInstructions1");

      var btn = document.getElementById("Instructions1");

      var span = document.getElementsByClassName("close")[0];



      modal.style.display = "block";
      

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    },
  }
})

// "managers": [
//   {"id": 1,  "name": "Manager1",  "surname": "hisSurname1",  "job": "Job1",  "linkedIn": "www1"},
//   {"id": 2,  "name": "Manager2",  "surname": "hisSurname2",  "job": "Job2",  "linkedIn": "www2"},
//   {"id": 3,  "name": "Manager3",  "surname": "hisSurname3",  "job": "Job3",  "linkedIn": "www3"}
// ]