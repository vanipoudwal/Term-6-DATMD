
document.getElementById('CreateContact').addEventListener('click',createNewContact);

function createNewContact()
{
    var NewContact = navigator.contacts.create();

    var DisplayName = [];
    DisplayName[0] = new ContactName('Home','Vani Poudwal',true);
    DisplayName[1] = new ContactName('Mobile','Deepika Bisht',false);
    DisplayName[2] = new ContactName('Fax','Lakshya Goel',false);
    DisplayName[3] = new ContactName('Main','Parbhleen Kaur',false);
    DisplayName[4] = new ContactName('Office','Priyanka Joshi',false);
    DisplayName[5] = new ContactName('Other','Yash Upreti',false);
    DisplayName[6] = new ContactName('Paper','Abdul Kalam',false);
    DisplayName[7] = new ContactName('Tax','Arvind Kejriwal',false);
    DisplayName[8] = new ContactName('Work','Narendra Modi',false);
    NewContact.DisplayName = DisplayName;

    var Nickname = [];
    Nickname[0] = new ContactField('Home','Guddu',true);
    Nickname[1] = new ContactField('Mobile','Rangeela',false);
    Nickname[2] = new ContactField('Fax','Lakku',false);
    Nickname[3] = new ContactField('Main','Bhabhi',false);
    Nickname[4] = new ContactField('Office','Pikachu',false);
    Nickname[5] = new ContactField('Other','Haider',false);
    Nickname[6] = new ContactField('Paper','Hero',false);
    Nickname[7] = new ContactField('Tax','Katya',false);
    Nickname[8] = new ContactField('Work','Tea',false);
    NewContact.Nickname = Nickname;

    var PhoneNumber = [];
    PhoneNumber[0] = new ContactField('Home','7291967064',true);
    PhoneNumber[1] = new ContactField('Mobile','9911100679',false);
    PhoneNumber[2] = new ContactField('Fax','9555703120',false);
    PhoneNumber[3] = new ContactField('Main','9876543210',false);
    PhoneNumber[4] = new ContactField('Office','9638527410',false);
    PhoneNumber[5] = new ContactField('Other','0123456789',false);
    PhoneNumber[6] = new ContactField('Paper','5555555555',false);
    PhoneNumber[7] = new ContactField('Tax','0000000000',false);
    PhoneNumber[8] = new ContactField('Work','9999999999',false);
    NewContact.PhoneNumber = PhoneNumber;

    var Address = [];
    Address [0] = new ContactAddress('Home','Panchsheel Park',true);
    Address [1] = new ContactAddress('Mobile','New Friends Colony',false);
    Address [2] = new ContactAddress('Fax','Punjabi Bagh',false);
    Address [3] = new ContactAddress('Main','Hauz Khas',false);
    Address [4] = new ContactAddress('Office','Lajpat Nagar',false);
    Address [5] = new ContactAddress('Other','Greater Kailash',false);
    Address [6] = new ContactAddress('Paper','Faridabad',false);
    Address [7] = new ContactAddress('Tax','Noida',false);
    Address [8] = new ContactAddress('Work','Gurugram',false);
    NewContact.Address = Address;

    var Organisation = [];
    Organisation [0] = new ContactOrganisation('Home','Wipro LTD','Managing Director',true);
    Organisation [1] = new ContactOrganisation('Mobile','GFK LTD','Board of director',false);
    Organisation [2] = new ContactOrganisation('Fax','NIIT LTD','Cheif Executive Officer',false);
    Organisation [3] = new ContactOrganisation('Main','Infoysis LTD','Supervisor',false);
    Organisation [4] = new ContactOrganisation('Office','InfoEdge LTD','General Manager',false);
    Organisation [5] = new ContactOrganisation('Other','LilDove LTD','Marketing Manager',false);
    Organisation [6] = new ContactOrganisation('Paper','MRU PVT LTD','Production Manager',false);
    Organisation [7] = new ContactOrganisation('Tax','VBB PVT LTD','HR Manager',false);
    Organisation [8] = new ContactOrganisation('Work','MRA PVT LTD','Finance Manager',false);
    NewContact.Organisation = Organisation;

    var search_opts = new ContactFindOptions();
    options.filter = "Vani Poudwal";
    options.multiple = false;
}