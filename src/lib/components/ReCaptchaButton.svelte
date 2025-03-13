<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { on } from "svelte/events";
	let { 
		id,
		type = "button" as "submit" | "button" | "reset" | undefined,
		classNames = "bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium py-2 px-6 rounded-md transition-all flex items-center",
		onClick = () => null,
		children
	} = $props();
	const RECAPTCHA_KEY = '6Ld8gPEqAAAAAHdlGkio9KurLbA1pHF2GM5k66ZJ'
	const updatedClass = `g-recaptcha ${classNames}`
	const onSubmit = `
      function onSubmit(token) {
        document.getElementById('form-to-book-ryan').submit();
      }
    `;
	let grecaptchaScript: HTMLScriptElement;
	let onSubmitScript: HTMLScriptElement;
		

	onMount(() => {
		if(!document.getElementById('gRecaptcha')) {
			grecaptchaScript = document.createElement('script');
			grecaptchaScript.id = "gRecaptcha";
			grecaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
			grecaptchaScript.async = true;
			grecaptchaScript.defer = true;
			document.head.appendChild(grecaptchaScript);
		}
		onSubmitScript = document.createElement('script');
		onSubmitScript.type = 'text/javascript';
		onSubmitScript.innerHTML = onSubmit;
		document.body.appendChild(onSubmitScript);
	});
	onDestroy(() => {
	
		if(onSubmitScript && onSubmitScript.parentNode) {
			onSubmitScript.parentNode.removeChild(onSubmitScript);
		}
	});
</script>


<button
	id={id}
	type={type}
	class={updatedClass}
	data-sitekey={RECAPTCHA_KEY}
	data-callback=onSubmit
	data-action="submit"
>
	{@render children()}
</button>
