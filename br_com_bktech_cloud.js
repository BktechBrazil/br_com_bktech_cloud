
//Constructor
function br_com_bktech_cloud_HandlerObject() {
};


br_com_bktech_cloud_HandlerObject.prototype = new ZmZimletBase();
br_com_bktech_cloud_HandlerObject.prototype.constructor = br_com_bktech_cloud_HandlerObject;

br_com_bktech_cloud_HandlerObject.prototype.toString =
function() {
   return "br_com_bktech_cloud_HandlerObject";
};

/** 
 * Creates the Zimlet, extends {@link https://files.zimbra.com/docs/zimlet/zcs/8.6.0/jsapi-zimbra-doc/symbols/ZmZimletBase.html ZmZimletBase}.
 * @class
 * @extends ZmZimletBase
 *  */
var BKTechLink = br_com_bktech_cloud_HandlerObject;

/** 
 * This method gets called when Zimbra Zimlet framework initializes.
 * BKTechLink uses the init function to load openpgp.js and configure the user settings and runtime variables.
 */
BKTechLink.prototype.init = function() {
try {   
var zimletInstance = appCtxt._zimletMgr.getZimletByName('br_com_bktech_cloud').handlerObject;
document.getElementById('skin_container_refresh').insertAdjacentHTML('beforebegin',"<div title=\"Abrir Site\" onclick=\"window.open('https://www.bktech.com.br/')\" style=\"float:left; background-image:url('"+zimletInstance.getResource('cloud-computing.png')+"');background-repeat:no-repeat;height:16px;width:16px;cursor:pointer\"></div>");  
} catch(err)
{
//read email in a new window
}
};



