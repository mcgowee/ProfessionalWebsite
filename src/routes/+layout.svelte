<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import { onMount } from 'svelte';

  let title = 'Earl McGowen Colorado - AI, Data Analytics, and SQL Expert';
  let description = 'Earl McGowen from Colorado is a seasoned expert in AI, Data Analytics, and SQL, providing top-notch services and insights.';
  let keywords = 'Earl McGowen, Colorado, AI, Data Analytics, SQL, AI Expert, Data Analytics Expert, SQL Expert';
  let url = 'https://earl-mcgowen.com/'; 

  onMount(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('keywords', keywords);

    // Structured data for the website
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Earl McGowen",
      "jobTitle": "AI, Data Analytics, and SQL Expert",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Aurora",
        "addressRegion": "Colorado",
        "addressCountry": "USA"
      },
      "description": description,
      "url": window.location.href
    };
    addStructuredData(structuredData);
  });

  function setMeta(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (meta) {
      meta.content = content;
    } else {
      meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    }
  }

  function addStructuredData(data) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);
  }
</script>

<Header />

<slot />
