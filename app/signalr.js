
    var Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb2xsZXlAZ21haWwuY29tIiwiaWQiOiI2MjlkYzJhYS1lMTA4LTRjZDItODJkYi05MTliMmQ2YjM4N2MiLCJqdGkiOiIxYzQzNTQ5NC0xODI0LTRjMjEtOTU0YS03MDQxM2ZjOThlNzgiLCJuYW1laWQiOiI2MjlkYzJhYS1lMTA4LTRjZDItODJkYi05MTliMmQ2YjM4N2MiLCJuYmYiOjE1OTA5OTY1ODEsImV4cCI6MTU5MTAwMzc4MCwiaWF0IjoxNTkwOTk2NTgxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MCJ9.nwEsXeYMxVZoYiwjzfC1BnFFhd4i7k3Bet3mJz3pbGk"

const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:5001/chatHub", {accessTokenFactory: () => Token})
    .configureLogging(signalR.LogLevel.Information)
    .build();

async function start() {
    try {
        await connection.start();
        console.log("connected");
    } catch (err) {
        console.log(err);
        setTimeout(() => start(), 5000);
    }
};

connection.onclose(async () => {
    await start();
});

connection.on("DisplayAlert", function(){
    alert("Connected")
})

// Start the connection.
// start();

// this is here to show an alternative to start, with a then
connection.start().then(() => console.log("connected")).catch(() => alert("Didnt connect"));


/* this is here to show another alternative to start, with a catch
connection.start().catch(err => console.error(err));
*/