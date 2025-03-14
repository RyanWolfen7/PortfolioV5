<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	let { 
		id,
		type = "button" as "submit" | "button" | "reset" | undefined,
		classNames = "bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium py-2 px-6 rounded-md transition-all flex items-center",
		onClick = () => null,
		children
	} = $props();
	
	// Use PUBLIC_ prefixed environment variable for client-side code
	const RECAPTCHA_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY || '6Ld8gPEqAAAAAHdlGkio9KurLbA1pHF2GM5k66ZJ';
	const updatedClass = `g-recaptcha ${classNames}`
	const formId = 'form-to-book-ryan';
	
	// Improved onSubmit function with error handling
	const onSubmit = `
      function onSubmit(token) {
        if (token) {
          const form = document.getElementById('${formId}');
          if (form) {
            form.submit();
          } else {
            console.error('Form not found');
          }
        } else {
          console.error('reCAPTCHA verification failed');
        }
      }
    `;
	let grecaptchaScript: HTMLScriptElement;
	let onSubmitScript: HTMLScriptElement;
		
	onMount(() => {
		// Load reCAPTCHA script if it's not already loaded
		if(!document.getElementById('gRecaptcha')) {
			grecaptchaScript = document.createElement('script');
			grecaptchaScript.id = "gRecaptcha";
			grecaptchaScript.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_KEY}`;
			grecaptchaScript.async = true;
			grecaptchaScript.defer = true;
			document.head.appendChild(grecaptchaScript);
		}
		
		// Add the onSubmit function
		if(!document.getElementById('recaptcha-submit-handler')) {
			onSubmitScript = document.createElement('script');
			onSubmitScript.id = 'recaptcha-submit-handler';
			onSubmitScript.type = 'text/javascript';
			onSubmitScript.innerHTML = onSubmit;
			document.body.appendChild(onSubmitScript);
		}
	});
	
	onDestroy(() => {
		// Clean up the onSubmit script when component is destroyed
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
	data-callback="onSubmit"
	data-action="booking_request"
	aria-label="Submit form with reCAPTCHA verification"
>
	{@render children()}
</button>
