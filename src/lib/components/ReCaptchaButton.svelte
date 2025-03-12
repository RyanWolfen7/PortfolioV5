<script lang="ts">
	import { onMount } from "svelte";
	let { 
		id,
		type = "button" as "submit" | "button" | "reset" | undefined,
		classNames = "bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium py-2 px-6 rounded-md transition-all flex items-center",
		onClick = () => null,
		children
	} = $props();
	const RECAPTCHA_KEY = '6Ld8gPEqAAAAAHdlGkio9KurLbA1pHF2GM5k66ZJ'
	const updatedClass = `g-recaptcha ${classNames}`
	function onSubmit(token: any) {
		console.log(token);
     	document.getElementById("demo-form");
   }
	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://www.google.com/recaptcha/api.js';
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);

		const script2 = document.createElement('script');
		script2.innerHTML = onSubmit.toString();
		document.body.appendChild(script2);
	});
</script>


<button
	id={id}
	type={type}
	class={updatedClass}
	data-sitekey={RECAPTCHA_KEY}
	data-callback="onSubmit"
	data-action="submit"
>
	{@render children()}
</button>
