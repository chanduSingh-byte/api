async function loadData() {

    const res = await fetch("https://api-dcx0.onrender.com/data"); // or full Render URL
    const json = await res.json();

    const container = document.getElementById("container");
    container.innerHTML = "";

    json.data.forEach(item => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>👤 ${item.name}</h3>
            <p>📧 ${item.email}</p>
            <p>📊 Status: ${item.status}</p>

            <h4>Request Info</h4>
            <pre>${JSON.stringify(item.request, null, 2)}</pre>

            <h4>Role Data</h4>
            <pre>${JSON.stringify(item.data, null, 2)}</pre>
        `;

        container.appendChild(card);
    });
}