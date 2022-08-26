var bday = new Date(1991,8,1);
var hireDate = new Date(2020,4,1);
var age = Math.floor((new Date().getTime()-bday.getTime()) / ((1000*60*60*24))/365);
var jobLength = Math.ceil((new Date().getTime()-hireDate.getTime()) / ((1000*60*60*24))/365);