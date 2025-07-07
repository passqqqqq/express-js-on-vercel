

export class ExplainService {

    constructor() {

    }

    private glossary = [{
        name: "Vitamins",
        description: "Vitamins are a group of organic compounds that are essential for the proper functioning of the body. They are involved in a wide range of biological processes, including metabolism, growth, and development.",
        tags: ["vitamins", "vitamin", "vitamin overdose"]
    }, {
        name: "Lobstering",
        description: "Lobster is a type of crustacean that is known for its large size and its ability to swim. It is a popular food in many parts of the world.",
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