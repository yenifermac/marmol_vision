const API = "http://localhost:3000/api/v1";
    

async function createUser(user) {
    const response = await fetch(`${API}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            
        },
        body: JSON.stringify(user),
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
}

export {
    createUser
} 
