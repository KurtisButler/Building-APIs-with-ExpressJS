$.ajax({
  type: "GET",
  url: "/api/chirps",
}).then((chirpFeed) => {
  for (const id in chirpFeed) {
    if (id === "nextid") return;
    $("#chirpbox").append(`
                 <div class="card m-3">
                     <div class="card-body">
                        <div class="card-title">${chirpFeed[id].user}</div>
                        <div class="card-text">${chirpFeed[id].msg}</div>
                    </div>
                </div>
             `);
  }
});
