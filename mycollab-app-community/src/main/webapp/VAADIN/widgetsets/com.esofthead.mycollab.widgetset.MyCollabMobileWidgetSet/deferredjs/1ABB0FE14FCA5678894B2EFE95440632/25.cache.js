$wnd.com_esofthead_mycollab_widgetset_MyCollabMobileWidgetSet.runAsyncCallback25("function OHc(){}\nfunction QHc(){}\nfunction SHc(){}\nfunction kpd(){h$b.call(this)}\nfunction i1b(a,b){return IL(a.G.lo(b))}\nfunction LTd(){LZb.call(this);this.I=PFe;this.a=new q4d}\nfunction rTc(c,a){var b=c;a.notifyChildrenOfSizeChange=c9d(function(){b.Wk()})}\nfunction zTc(b){try{b!=null&&eval('{ var document = $doc; var window = $wnd; '+b+'}')}catch(a){}}\nfunction oTc(b){if(b&&b.iLayoutJS){try{b.iLayoutJS();return true}catch(a){return false}}else{return false}}\nfunction nTc(a,b){var c,d;for(c=L0d(new M0d(a.f));c.a.Ug();){d=IL(R0d(c));if(PL(a.f.lo(d))===PL(b)){return d}}return null}\nfunction sTc(a,b){var c,d;d=nTc(a,b);d!=null&&a.f.oo(d);c=GL(a.a.lo(b),519);if(c){a.a.oo(b);return bd(a,c)}else if(b){return bd(a,b)}return false}\nfunction pTc(a){var b,c,d;d=(rub(),a._b).getElementsByTagName('IMG');for(b=0;b<d.length;b++){c=d[b];pub.Ag(c,bfe)}}\nfunction tTc(a,b){var c,d,e;if((Zt(),b).hasAttribute(fAe)){e=cu(b,fAe);a.e.no(e,b);It(b,'')}else{d=(rub(),Awb(b));for(c=0;c<d;c++){tTc(a,zwb(b,c))}}}\nfunction uTc(a,b,c){var d,e;if(!b){return}d=HL(a.e.lo(c));if(!d&&a.d){throw new mZd('No location '+c+' found')}e=GL(a.f.lo(c),9);if(e==b){return}!!e&&sTc(a,e);a.d||(d=(rub(),a._b));Tc(a,b,(rub(),d));a.f.no(c,b)}\nfunction vTc(a,b){var c,d,e;d=b.Pd();if(d.$b!=a){return}e=GL(a.a.lo(d),519);if(y9b(b.Nd())){if(!e){c=nTc(a,d);bd(a,d);e=new G9b(b,a.b);Sc(a,e,HL(a.e.lo(c)));a.a.no(d,e)}t9b(e.a)}else{if(e){c=nTc(a,d);bd(a,e);Sc(a,d,HL(a.e.lo(c)));a.a.oo(d)}}}\nfunction KHc(c){var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.ok(cmb,LFe,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.ok(cmb,MFe,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.ok(cmb,NFe,d)}\nfunction wTc(){var a;cd.call(this);this.e=new q4d;this.f=new q4d;this.a=new q4d;lb(this,(rub(),Ov($doc)));a=this._b.style;Kx(a,yoe,(Qx(),o9d));Kx(a,Kqe,(sB(),Uae));Kx(a,Wqe,Uae);(I3b(),!H3b&&(H3b=new Z3b),I3b(),H3b).a.g&&Kx(a,F9d,(xA(),hae));Gt(this._b,PFe);Hb(this._b,Sye,true)}\nfunction jpd(a){var b,c;if(a.a){return}c=(!a.F&&(a.F=rg(a)),GL(GL(GL(a.F,6),114),387)).c;b=(!a.F&&(a.F=rg(a)),GL(GL(GL(a.F,6),114),387)).b;if(c!=null){b=i1b(a.u,'layouts/'+c+'.html');b==null&&It(bb(GL(Zg(a),242)),'<em>Layout file layouts/'+c+'.html is missing. Components will be drawn for debug purposes.<\\/em>')}b!=null&&qTc(GL(Zg(a),242),b,j1b(a.u));a.a=true}\nfunction qTc(a,b,c){var d;b=mTc(a,b);d=Dbc(c+'/layouts/');b=q$d(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=\"((?![a-z]+:)[^/][^\"]+)\"',OFe+d+'$3\"');b=q$d(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=[^\"]((?![a-z]+:)[^/][^ />]+)[ />]',OFe+d+'$3\"');b=q$d(b,'(<[^>]+style=\"[^\"]*url\\\\()((?![a-z]+:)[^/][^\"]+)(\\\\)[^>]*>)','$1 '+d+'$2 $3');It((rub(),a._b),b);a.e.Ic();tTc(a,a._b);pTc(a);a.c=zub(a._b);!a.c&&(a.c=a._b);rTc(a,a.c);a.d=true}\nfunction mTc(a,b){var c,d,e,f,g,h,i,j;b=q$d(b,'_UID_',a.g+'__');a.i='';d=0;f=b.toLowerCase();h='';i=f.indexOf('<script',0);while(i>0){h+=b.substr(d,i-d);i=f.indexOf('>',i);e=f.indexOf('<\\/script>',i);a.i+=b.substr(i+1,e-(i+1))+';';g=d=e+9;i=f.indexOf('<script',g)}h+=A$d(b,d,b.length-d);f=h.toLowerCase();j=f.indexOf('<body');if(j<0){h=h}else{j=f.indexOf('>',j)+1;c=f.indexOf('<\\/body>',j);c>j?(h=h.substr(j,c-j)):(h=A$d(h,j,h.length-j))}return h}\nvar LFe='templateName',MFe='templateContents',NFe='childLocations',OFe='<$1 $2src=\"',PFe='v-customlayout';Dqb(1791,1,kqe);_.Ie=function NHc(){gKc(this.b,cmb,tlb);YJc(this.b,wue,Wfb);$Jc(this.b,Zab,xue,new OHc);$Jc(this.b,Wfb,xue,new QHc);$Jc(this.b,cmb,xue,new SHc);eKc(this.b,Wfb,uae,new QJc(cmb));eKc(this.b,Wfb,Fae,new QJc(Zab));KHc(this.b);cKc(this.b,cmb,LFe,new QJc(tob));cKc(this.b,cmb,MFe,new QJc(tob));cKc(this.b,cmb,NFe,new RJc(dwe,zL(vL(u9,1),yue,4,0,[new QJc(Xkb),new QJc(tob)])));Wpc((!Ppc&&(Ppc=new aqc),Ppc),this.a.d)};Dqb(1793,1,Hxe,OHc);_.ik=function PHc(a,b){return new wTc};var w8=CYd(Gse,'ConnectorBundleLoaderImpl/25/1/1',1793);Dqb(1794,1,Hxe,QHc);_.ik=function RHc(a,b){return new kpd};var x8=CYd(Gse,'ConnectorBundleLoaderImpl/25/1/2',1794);Dqb(1795,1,Hxe,SHc);_.ik=function THc(a,b){return new LTd};var y8=CYd(Gse,'ConnectorBundleLoaderImpl/25/1/3',1795);Dqb(242,202,{14:1,11:1,13:1,12:1,24:1,30:1,15:1,26:1,10:1,9:1,242:1,19:1},wTc);_.Hc=function xTc(a){throw new b_d};_.Ic=function yTc(){Nc(this);this.f.Ic();this.a.Ic()};_.Wk=function ATc(){};_.sc=function BTc(a){Ub(this,a);rub();if(mwb((Zt(),a).type)==bfe){j9b(this,true);lwb(a,true)}};_.tc=function CTc(){Vb(this);!!this.c&&(this.c.notifyChildrenOfSizeChange=null,undefined)};_.Jc=function DTc(a){return sTc(this,a)};_.jc=function ETc(a){Gt((rub(),this._b),a);Hb(this._b,Sye,true)};_.d=false;_.i='';var Zab=CYd(wae,'VCustomLayout',242);Dqb(1792,498,{7:1,16:1,120:1,91:1,132:1,25:1,34:1,33:1,31:1,151:1,248:1,32:1,3:1},kpd);_.Nd=function lpd(){return !this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)};_.zd=function mpd(){return !this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)};_.yi=function npd(){return !this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)};_.Pd=function opd(){return GL(Zg(this),242)};_.Bd=function ppd(){GL(Zg(this),242).b=this.u;GL(Zg(this),242).g=this.w};_.Fi=function qpd(){oTc((GL(Zg(this),242),zub(bb(GL(Zg(this),242)))))};_.ke=function rpd(b){var c,d,e,f,g,h;jpd(this);for(d=Zh(this).Pc();d.Ug();){c=GL(d.Vg(),16);e=IL((!this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)).a.lo(c));try{uTc(GL(Zg(this),242),c.Pd(),e)}catch(a){a=Aqb(a);if(KL(a,38)){x8d(z8d((wYd(Wfb),Wfb.k)),\"Child not rendered as no slot with id '\"+e+\"' has been defined\")}else throw zqb(a)}}for(g=b.a.Pc();g.Ug();){f=GL(g.Vg(),16);if(f.xd()==this){continue}h=f.Pd();h.qc()&&sTc(GL(Zg(this),242),h)}};_.Dd=function spd(a){_g(this,a);jpd(this);zTc(GL(Zg(this),242).i);GL(Zg(this),242).i=null};_.le=function tpd(a){vTc(GL(Zg(this),242),a)};_.ji=function upd(a,b){};_.a=false;var Wfb=CYd('com.vaadin.client.ui.customlayout',gye,1792);Dqb(387,114,{6:1,41:1,114:1,387:1,3:1},LTd);var cmb=CYd('com.vaadin.shared.ui.customlayout','CustomLayoutState',387);c9d(Vq)(25);\n//# sourceURL=com.esofthead.mycollab.widgetset.MyCollabMobileWidgetSet-25.js\n")