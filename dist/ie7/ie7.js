/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-ico-add': '&#xe920;',
		'icon-ico-check-circle': '&#xe921;',
		'icon-ico-close-circle': '&#xe922;',
		'icon-ico-search': '&#xe91f;',
		'icon-ico-school-outline': '&#xe91e;',
		'icon-ico-hide-large': '&#xe91c;',
		'icon-ico-hide': '&#xe91d;',
		'icon-icon-draw-pen': '&#xe91a;',
		'icon-ico-radius': '&#xe91b;',
		'icon-ico-locate': '&#xe914;',
		'icon-ico-pin': '&#xe915;',
		'icon-ico-facebook': '&#xe916;',
		'icon-ico-google+': '&#xe917;',
		'icon-ico-pinterest': '&#xe918;',
		'icon-ico-twitter': '&#xe919;',
		'icon-ico-email': '&#xe90e;',
		'icon-ico-bath': '&#xe90f;',
		'icon-ico-bed': '&#xe910;',
		'icon-ico-close': '&#xe911;',
		'icon-ico-drivetime': '&#xe912;',
		'icon-ico-school': '&#xe913;',
		'icon-ico-house': '&#xe90a;',
		'icon-ico-condo': '&#xe908;',
		'icon-ico-farmRanch': '&#xe909;',
		'icon-ico-land': '&#xe90b;',
		'icon-ico-multiFamily': '&#xe90c;',
		'icon-ico-townhouse': '&#xe90d;',
		'icon-ico-check': '&#xe900;',
		'icon-ico-chevron-left': '&#xe901;',
		'icon-ico-chevron-right': '&#xe902;',
		'icon-ico-fav': '&#xe903;',
		'icon-ico-faved': '&#xe904;',
		'icon-ico-order': '&#xe905;',
		'icon-ico-sort-down': '&#xe906;',
		'icon-ico-unfav': '&#xe907;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
