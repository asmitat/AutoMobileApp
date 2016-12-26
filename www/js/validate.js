
//login
function userName() {

    var username = $('#username').val();
    if (username=="") {
     $('#username').css('border-color','red');
     $('#username').focus();
    return false;
	}
	else
	{
	$('#username').css('border-color','green');
	return true;
	}
}
function userpwd() {

    var pwd= $('#pwd').val();
    if (pwd=="") {
     $('#pwd').css('border-color','red');
     $('#pwd').focus();
    return false;
	}
	else
	{
	$('#pwd').css('border-color','green');
	return true;
	}
}

// Add lead
function checkMobile()
{
	

    var pass1 = document.getElementById('mobile');


    var message = document.getElementById('message');

   var goodColor = "#0C6";
    var badColor = "#FF9B37";

    if(mobile.value.length!=10){

        mobile.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "required 10 digits, match requested format!"
    }
}
function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
     $('#email').css('border-color','red');
     $('#email').focus();
    return false;
 }
 else
 {
  $('#email').css('border-color','green');
  return true;
 }
}

function fname() {

    var firstname = $('#firstname').val();
    if (firstname=="") {
     $('#firstname').css('border-color','red');
     $('#firstname').focus();
    return false;
	}
	else
	{
	$('#firstname').css('border-color','green');
	return true;
	}
}
function lname() {

    var lastname = $('#lastname').val();
    if (lastname=="") {
     $('#lastname').css('border-color','red');
     $('#lastname').focus();
    return false;
	}
	else
	{
	$('#lastname').css('border-color','green');
	return true;
	}
}
function lc() {

    var ldate = $('#dob').val();
    if (ldate=="") {
     $('#dob').css('border-color','red');
     $('#dob').focus();
    return false;
	}
	else
	{
	$('#dob').css('border-color','green');
	return true;
	}
}
function gender1() {

    var gender = $('#gender').val();
    if (gender==0) {
     $('#gender').css('border-color','red');
     $('#gender').focus();
    return false;
	}
	else
	{
	$('#gender').css('border-color','green');
	return true;
	}
}
function mstatus1() {

    var mstatus1 = $('#mstatus').val();
    if (mstatus1==0) {
     $('#mstatus').css('border-color','red');
     $('#mstatus').focus();
    return false;
	}
	else
	{
	$('#mstatus').css('border-color','green');
	return true;
	}
}

function type1() {

    var type = $('#type').val();
    if (type=="") {
     $('#type').css('border-color','red');
     $('#type').focus();
    return false;
	}
	else
	{
	$('#type').css('border-color','green');
	return true;
	}
}
function loc() {

    var locastion = $('#locastion').val();
    if (locastion=="") {
     $('#locastion').css('border-color','red');
     $('#locastion').focus();
    return false;
	}
	else
	{
	$('#locastion').css('border-color','green');
	return true;
	}
}


function sch() {

    var scheme = $('#scheme').val();
    if (scheme=="") {
     $('#scheme').css('border-color','red');
     $('#scheme').focus();
    return false;
	}
	else
	{
	$('#scheme').css('border-color','green');
	return true;
	}
}
function state() {

    var status = $('#status').val();
    if (status=="") {
     $('#status').css('border-color','red');
     $('#status').focus();
    return false;
	}
	else
	{
	$('#status').css('border-color','green');
	return true;
	}
}
function mstatus1() {

    var mstatus1 = $('#mstatus').val();
    if (mstatus1=="") {
     $('#mstatus').css('border-color','red');
     $('#mstatus').focus();
    return false;
	}
	else
	{
	$('#mstatus').css('border-color','green');
	return true;
	}
}


function nc() {

    var ndate = $('#mdate').val();
    if (ndate=="") {
     $('#mdate').css('border-color','red');
     $('#mdate').focus();
    return false;
	}
	else
	{
	$('#mdate').css('border-color','green');
	return true;
	}
}

// Bulk email validation
function emailSub() {

    var emailsub = $('#emailsub').val();
    if (emailsub=="") {
     $('#emailsub').css('border-color','red');
     $('#emailsub').focus();
    return false;
	}
	else
	{
	$('#emailsub').css('border-color','green');
	return true;
	}
}
function emailContent() {

    var emailcontent = $('#emailcontent').val();
    if (emailcontent=="") {
     $('#emailcontent').css('border-color','red');
     $('#emailcontent').focus();
    return false;
	}
	else
	{
	$('#emailcontent').css('border-color','green');
	return true;
	}
}

function emailAttach() {

    var emailattach = $('#emailattach').val();
    if (emailattach=="") {
     $('#emailattach').css('border-color','red');
     $('#emailattach').focus();
    return false;
	}
	else
	{
	$('#emailattach').css('border-color','green');
	return true;
	}
}

//Bulk sms to all

function messagetoall() {

    var message = $('#message').val();
    if (message=="") {
     $('#message').css('border-color','red');
     $('#message').focus();
    return false;
	}
	else
	{
	$('#message').css('border-color','green');
	return true;
	}
}

// SETTING PAGE VALIDATION

// Email template tab

function etemp() {

    var etname=$('#etname').val();
    if (etname=="") {
     $('#etname').css('border-color','red');
     $('#etname').focus();
    return false;
	}
	else
	{
	$('#etname').css('border-color','green');
	return true;
	}
}

function etempSub() {

    var etsub=$('#etsub').val();
    if (etsub=="") {
     $('#etsub').css('border-color','red');
     $('#etsub').focus();
    return false;
	}
	else
	{
	$('#etsub').css('border-color','green');
	return true;
	}
}
function etempCon() {

    var etcotent=$('#etcotent').val();
    if (etcotent=="") {
     $('#etcotent').css('border-color','red');
     $('#etcotent').focus();
    return false;
	}
	else
	{
	$('#etcotent').css('border-color','green');
	return true;
	}
}

// Sms tab
function smsTemp() {

    var smstname=$('#smstname').val();
    if (smstname=="") {
     $('#smstname').css('border-color','red');
     $('#smstname').focus();
    return false;
	}
	else
	{
	$('#smstname').css('border-color','green');
	return true;
	}
}

function smsMsg() {

    var smsmessage=$('#smsmessage').val();
    if (smsmessage=="") {
     $('#smsmessage').css('border-color','red');
     $('#smsmessage').focus();
    return false;
	}
	else
	{
	$('#smsmessage').css('border-color','green');
	return true;
	}
}

// Getaway details

function smsGetway() {

    var smsgetwayname=$('#smsgetwayname').val();
    if (smsgetwayname=="") {
     $('#smsgetwayname').css('border-color','red');
     $('#smsgetwayname').focus();
    return false;
	}
	else
	{
	$('#smsgetwayname').css('border-color','green');
	return true;
	}
}

function smsGetwaypass() {

    var smsgetwaypass=$('#smsgetwaypass').val();
    if (smsgetwaypass=="") {
     $('#smsgetwaypass').css('border-color','red');
     $('#smsgetwaypass').focus();
    return false;
	}
	else
	{
	$('#smsgetwaypass').css('border-color','green');
	return true;
	}
}

// SMTP Getaway

function smskeyPass() {

    var smskeypass=$('#smskeypass').val();
    if (smskeypass=="") {
     $('#smskeypass').css('border-color','red');
     $('#smskeypass').focus();
    return false;
	}
	else
	{
	$('#smskeypass').css('border-color','green');
	return true;
	}
}

function smskeyUsername() {

    var smskeyusername=$('#smskeyusername').val();
    if (smskeyusername=="") {
     $('#smskeyusername').css('border-color','red');
     $('#smskeyusername').focus();
    return false;
	}
	else
	{
	$('#smskeyusername').css('border-color','green');
	return true;
	}
}
// SMTP Details 
function serverSmtp() {

    var serversmtp=$('#serversmtp').val();
    if (serversmtp=="") {
     $('#serversmtp').css('border-color','red');
     $('#serversmtp').focus();
    return false;
	}
	else
	{
	$('#serversmtp').css('border-color','green');
	return true;
	}
}

function serverPort() {

    var serverport=$('#serverport').val();
    if (serverport=="") {
     $('#serverport').css('border-color','red');
     $('#serverport').focus();
    return false;
	}
	else
	{
	$('#serverport').css('border-color','green');
	return true;
	}
}

function serverUsername() {

    var serverusername=$('#serverusername').val();
    if (serverusername=="") {
     $('#serverusername').css('border-color','red');
     $('#serverusername').focus();
    return false;
	}
	else
	{
	$('#serverusername').css('border-color','green');
	return true;
	}
}
function serverPwd() {

    var serverpwd=$('#serverpwd').val();
    if (serverpwd=="") {
     $('#serverpwd').css('border-color','red');
     $('#serverpwd').focus();
    return false;
	}
	else
	{
	$('#serverpwd').css('border-color','green');
	return true;
	}
}

// property validation

function proName() {

    var pname=$('#pname').val();
    if (pname=="") {
     $('#pname').css('border-color','red');
     $('#pname').focus();
    return false;
	}
	else
	{
	$('#pname').css('border-color','green');
	return true;
	}
}

function proType() {

    var ptype=$('#ptype').val();
    if (ptype=="") {
     $('#ptype').css('border-color','red');
     $('#ptype').focus();
    return false;
	}
	else
	{
	$('#ptype').css('border-color','green');
	return true;
	}
}
function proLoc() {

    var plocation=$('#plocation').val();
    if (plocation=="") {
     $('#plocation').css('border-color','red');
     $('#plocation').focus();
    return false;
	}
	else
	{
	$('#plocation').css('border-color','green');
	return true;
	}
}
// Indivisual lead
function smsMesg() {

    var smsmessage=$('#smsmessage').val();
    if (smsmessage=="") {
     $('#smsmessage').css('border-color','red');
     $('#smsmessage').focus();
    return false;
	}
	else
	{
	$('#smsmessage').css('border-color','green');
	return true;
	}
}
// email

// Bulk email validation
function email_Sub() {

    var email_sub = $('#email_sub').val();
    if (email_sub=="") {
     $('#email_sub').css('border-color','red');
     $('#email_sub').focus();
    return false;
	}
	else
	{
	$('#email_sub').css('border-color','green');
	return true;
	}
}
function email_Content() {

    var email_content = $('#email_content').val();
    if (email_content=="") {
     $('#email_content').css('border-color','red');
     $('#email_content').focus();
    return false;
	}
	else
	{
	$('#email_content').css('border-color','green');
	return true;
	}
}

function email_Attach() {

    var email_file = $('#email_file').val();
    if (email_file=="") {
     $('#email_file').css('border-color','red');
     $('#email_file').focus();
    return false;
	}
	else
	{
	$('#email_file').css('border-color','green');
	return true;
	}
}

//Follow up 

function visit_f() {

    var visit = $('#visit').val();
    if (visit==0) {
     $('#visit').css('border-color','red');
     $('#visit').focus();
    return false;
	}
	else
	{
	$('#visit').css('border-color','green');
	return true;
	}
}


 function followup() {

    var remark = $('#remark').val();
    if (remark=="") {
     $('#remark').css('border-color','red');
     $('#remark').focus();
    return false;
	}
	else
	{
	$('#remark').css('border-color','green');
	return true;
	}
}
function date_p() {

    var example1 = $('#example1').val();
    if (example1=="") {
     $('#example1').css('border-color','red');
     $('#example1').focus();
    return false;
	}
	else
	{
	$('#example1').css('border-color','green');
	return true;
	}
}
function visit_f1() {

    var visit1 = $('#visit1').val();
    if (visit1==0) {
     $('#visit1').css('border-color','red');
     $('#visit1').focus();
    return false;
	}
	else
	{
	$('#visit1').css('border-color','green');
	return true;
	}
}
 