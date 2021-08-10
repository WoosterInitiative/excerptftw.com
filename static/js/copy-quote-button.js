document.querySelectorAll('blockquote').forEach(quote =>
  quote.addEventListener('click', async event => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      console.debug('Clipboard API not available')
      return
    }
    const text = event.target.innerText
    try {
      await navigator.clipboard.writeText(text)
      // event.target.textContent = 'Copied to clipboard'
    } catch (err) {
      console.error('Failed to copy!', err)
    }
}))