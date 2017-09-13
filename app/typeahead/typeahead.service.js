function typeaheadService($state) {

  return {
    employeeData: () => [
      {team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik',
        'Leah Shumway']},
      {team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
      {team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},
      {team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
    ]
  }
}

/* @ngInject */
export default typeaheadService;
