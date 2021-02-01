
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  
 patients = [
    {
        userimage: 'image/user.png',
        username: 'Sidney E. Harris',
        lastupdate: 'Updated 1 day ago',
        city: 'London',
        birthday: 'July 19, 1989',
        regdate: 'May 26, 2020',
        regtime: '6:30 PM',
        level: 'high',
        color: '',
    },
    
    {
        userimage: 'image/user.png',
        username: 'Juliane Klein',
        lastupdate: 'Updated 1 day ago',
        city: 'Berlin',
        birthday: 'February 5, 1952',
        regdate: 'May 26, 2020',
        regtime: '8:00 AM',
        level: 'low',
        color: '',
    },

    {
        userimage: 'image/user.png',
        username: 'Sarah Fiedler',
        lastupdate: 'Updated 1 day ago',
        city: 'New York',
        birthday: 'June 3, 1978',
        regdate: 'May 26, 2020',
        regtime: '7:30 AM',
        level: 'high',
        color: '',
    },

    {
        userimage: 'image/user.png',
        username: 'Hamed Noori',
        lastupdate: 'Updated 1 day ago',
        city: 'Tehran',
        birthday: 'August 10, 1982',
        regdate: 'May 25, 2020',
        regtime: '5:00 PM',
        level: 'normal',
        color: '',
    },

    {
        userimage: 'image/user.png',
        username: 'Chappell Brasseur',
        lastupdate: 'Updated 2 day ago',
        city: 'Paris',
        birthday: 'April 12, 2000',
        regdate: 'May 25, 2020',
        regtime: '4:30 PM',
        level: 'high',
        color: '',
    },

    {
        userimage: 'image/user.png',
        username: 'Michael M. Gauna',
        lastupdate: 'Updated 3 day ago',
        city: 'Los Angeles',
        birthday: 'January 26, 1970',
        regdate: 'May 25, 2020',
        regtime: '2:00 PM',
        level: 'normal',
        color: '',
    },
    
];

new Vue({
    el: '#patients-list',
    data:{
        patients : patients,
    },
   
    
});



