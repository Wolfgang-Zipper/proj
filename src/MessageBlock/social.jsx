import React from 'react';
const getSocial = (social)  => {
        
        switch (social) {
            case "vk": {
                return <i class="fab fa-vk"></i>
            }
            case "twitter": {
                return <i  className="fab fa-twitter"> </i>
            }
            case "fb": {
                return <i class="fab fa-facebook-f"> </i>
            }

            default: return <i class="fas fa-hashtag"> </i>
        }  
    }

    export default getSocial;

    