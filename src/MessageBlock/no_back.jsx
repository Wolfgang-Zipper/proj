
const getRandomimg = (min, max)  => {
        let rand = Math.round(Math.random() * (max - min) + min);
        switch (rand) {
            case 1: {
                return '#177ee6'
            }
            case 2: {
                return "url(https://cdn.nohat.cc/thumb/f/720/4510015905857536.jpg)"
            }
            case 3: {
                return "url(https://www.vippng.com/png/full/151-1519922_edits-lines-texture-patterns-backgrounds-overlay-wrapping-paper.png)"
            }
            case 4: {
                return "url(https://cdn.shopify.com/s/files/1/2804/8054/products/il_fullxfull.579719500_a4co_1024x.jpg?v=1571726547)"
            }
            case 5: {
                return "url(https://cdn.shopify.com/s/files/1/2804/8054/products/il_fullxfull.579719500_a4co_1024x.jpg?v=1571726547)"
            }
            case 6: {
                return "url(https://cdn.pixabay.com/photo/2015/09/12/23/48/stripes-937568_960_720.jpg)"
            }
            default: return "url(https://s-media-cache-ak0.pinimg.com/originals/ba/cc/76/bacc76b9a5dc6a733c23784b36d5d3de.jpg)";
        }  
    }

    export default getRandomimg;