/*!CK:1192847489!*//*1392692481,178191169*/

if (self.CavalryLogger) { CavalryLogger.start_js(["vxsWQ"]); }

__d("BirthdayReminder",["Animation","AsyncDialog","AsyncRequest","DOM","Event","tx","XBirthdayMessagePostControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={registerMessageHandler:function(o,p,q){k.listen(o,'click',function(event,r){var s=(new i()).setURI('/ajax/messaging/composer.php').setData({ids:[p],ref:q}).setMethod('POST');h.send(s,function(t){t.subscribe('Messenger/message-sent',function(){var u=new m().getURI();new i().setURI(u).setData({id:p}).setMethod('POST').send();});});});},registerWallpostHandler:function(o){k.listen(o,'error',function(event,p){j.setContent(o,"There was an error submitting your post.");return false;});},registerCommentHandler:function(o,p){k.listen(o,'error',function(event,q){j.setContent(o,"There was an error submitting your comment.");return false;});k.listen(o,'success',function(event,q){j.replace(o,p);new g(p).duration(1000).checkpoint().to('backgroundColor','#FFFFFF').from('borderColor','#FFE222').to('borderColor','#FFFFFF').go();});}};e.exports=n;});