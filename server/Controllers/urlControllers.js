import urlModal from "../model/urlModal.js";
import request from 'request'
import cherio from "cheerio";
import wordCount from 'html-word-count'
import mongoose from "mongoose";

export const allInsights = async (req, res) => {
    try {
        const allInsights = await urlModal.find();
        res.status(200).json(allInsights);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getInsight = async (req, res) => {
    const data = req.body;

    try {
        if (data.domain) {
            const url = data.domain;
            console.log(url)
            request(url, (err, resp, html) => {
                let images = []
                if (!err && resp.statusCode == 200) {
                    console.log("Request was success ");
                    // Define Cherio or $ Object 
                    const $ = cherio.load(html);
                    $("img").each((index, image) => {
                        var img = $(image).attr('src');
                        var baseUrl = url;
                        var Links = baseUrl + img;
                        images.push(Links)
                    })
                    let words = wordCount(html)
                    const newUrl = new urlModal({ ...data, images: images, words: words, createdAt: new Date().toISOString() });
                    console.log(newUrl)
                    newUrl.save();
                    res.status(201).json(newUrl)

                } else {
                    throw new Error("site not found")
                }
            });
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const updateInsights = async (req, res) => {
    console.log("helo udpata")
    const { id } = req.params;
    const { favorite } = req.body;
    console.log(id, req.body)
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    // const insight = await urlModal.findById(id);
    const updatedPost = await urlModal.findByIdAndUpdate(id, { favorite: favorite }, { new: true });
    res.json(updatedPost);
}

export const deleteInsights = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await urlModal.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}