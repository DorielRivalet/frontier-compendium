<script lang="ts">
	import Sun from '$lib/client/images/icon/sun.webp';
	import Moon from '$lib/client/images/icon/moon.webp';
	import {
		getThemeNameFromId,
		setTheme,
		theme,
	} from '$lib/client/stores/theme';
	import { browser } from '$app/environment';
	import { catppuccinThemeMap } from '$lib/client/themes/catppuccin';

	$: icon = $theme === 'g10' ? Sun : Moon;

	function changeTheme(themeID: string) {
		setTheme(themeID);
		changeCatppuccinFlavorCSSVariables(themeID);
	}

	function clicked(e: MouseEvent) {
		icon = icon === Sun ? Moon : Sun;
		let themeID = icon === Sun ? '0' : '3';
		changeTheme(themeID);
	}

	function changeCatppuccinFlavorCSSVariables(themeID: string) {
		if (!browser) return;
		let themeValue = getThemeNameFromId(themeID);
		let cssVarMap =
			catppuccinThemeMap[themeValue] || catppuccinThemeMap.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});
	}
</script>

<button on:click={(e) => clicked(e)}>
	<img src={icon} alt="theme icon" />
</button>

<style lang="scss">
	@use '@carbon/motion' as motion;

	button {
		width: var(--cds-spacing-09);
		background-color: var(--ctp-surface0);
		border: 2px solid var(--ctp-overlay0);
		border-radius: 10%;
		display: flex;
		padding: var(--cds-spacing-01);
		transition:
			border-color motion.$duration-slow-02 motion.motion(standard, expressive),
			background-color motion.$duration-slow-02
				motion.motion(standard, expressive),
			scrollbar-color motion.$duration-slow-02
				motion.motion(standard, expressive),
			opacity motion.$duration-slow-02 motion.motion(standard, expressive),
			background-image motion.$duration-slow-02
				motion.motion(standard, expressive);
	}

	img {
		width: var(--cds-spacing-09);
	}
</style>
