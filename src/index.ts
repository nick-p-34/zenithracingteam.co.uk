export default {
    async fetch(request: Request) {
        return new Response('Hello from Zenith Racing Team!', {
            headers: { 'Content-Type': 'text/plain' },
        });
    },
};