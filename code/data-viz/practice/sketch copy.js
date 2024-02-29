let trackNum;
let trackTime;
let albumColors = [];
const clientId = '';
const redirectUri = encodeURIComponent('http://localhost:8888/callback');
const scopes = encodeURIComponent('user-read-private user-read-email');

const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&state=yourUniqueState`;

async function fetchAlbumTracks(accessToken) {
    const url = 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks';
    //let accessToken = localStorage.getItem('access_token');
    try {
      const response = await fetch(url, {
        method: 'GET', // The HTTP method for the request
        headers: {
          'Authorization': `Bearer ${accessToken}` // Authorization header with Bearer token
        }
      });
  
      if (!response.ok) {
        // If the response is not 2xx, throw an error
        throw new Error('Failed to fetch album tracks');
      }
  
      const data = await response.json(); // Parse the JSON from the response
      console.log(data); // Log or process the data as needed
      return data; // Return the data for further processing
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function fetchTrackLng(accessToken) {
    let url = 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks';
    try {
      const response = await fetch(url, {
        method: 'GET', // The HTTP method for the request
        headers: {
          'Authorization': `Bearer ${accessToken}` // Authorization header with Bearer token
        }
      });
  
      if (!response.ok) {
        // If the response is not 2xx, throw an error
        throw new Error('Failed to fetch album tracks');
      }
  
      const data = await response.json(); // Parse the JSON from the response
      console.log(data); // Log or process the data as needed
      return data; // Return the data for further processing
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  
  // Call the function to fetch album tracks
  


function setup() {
    createCanvas(600,600);
    noLoop();
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Make sure to use your actual access token here
  fetchAlbumData(accessToken).then(() => {
    redraw(); // Once data is fetched, redraw the canvas

}

function draw() {
    background(200);
    fetchAlbumTracks();
    fetchTrackLng();

} 



/* function drawTrackNum(totalTrackNum) {
    for (i = 0; i> totalTrackNum -1; i +=) {
        push():
            fill();
            rect(0,trackNum, width/trackTime, height/totalTrackNum);

    }
}
*/
  