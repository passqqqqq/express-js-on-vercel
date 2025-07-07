

export class ExplainService {

    constructor() {

    }

    private glossary = [{
        name: "Vitamins",
        description: "The queen provides a lot of good vibes, motivation, sweetness and beauty on stream, expressed as \"vitamins\". Too much vitamins will give you an overdose, from all her yapping and beauty.",
        tags: ["vitamins", "vitamin", "vitamin overdose"]
    }, {
        name: "Lobstering",
        description: "The queen loves to go for sun tanning, but when she tans a little bit too much, her skin becomes red and that makes her look like a lobster!",
        tags: ["lobstering", "lobster", "lobster tanning"]
    }, {
        name: "Going bananas",
        description: "When you are going bananas is a funnny phrase we used when our queen went for shopping at the mall in greece, and she was over excited and bought a lot of things, and she was like \"I'm going bananas\"",
        tags: ["going bananas", "bananas", "banana"]
    }]

    public getAvailableTerms() {
        return this.glossary.map(item => item.name).join(", ");
    }

    public getExplanation(query: string) {
        const explanation = this.glossary.find(item => {
            return item.tags.some(tag => query.trim().toLowerCase().includes(tag.toLowerCase())) || item.name.toLowerCase().includes(query.trim().toLowerCase())
        });

        if (!explanation) {
            return
        }

        return `${explanation?.name} - ${explanation?.description}`;
    }
}