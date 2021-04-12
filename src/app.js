import { GraphQLServer } from 'graphql-yoga';

// Type Definitions (Application Schema)
const typeDefs = `
    type Query {
        me: User!
        post: Post!
        greeting(name: String!, position: String!): String
        add(a: Float!, b: Float!): Float!
        summation(number: [Float]!): Float
        greetings(name: String): String!
        grades: [Int!]!
    }
    
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
    
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`


// Resolvers
const resolvers = {
    Query: {
        me(){
            return {
                id: '1223dddhdi',
                name: 'Yinka Robert',
                email: 'yinkarobert@mail.com',
                age: 33
            }
        },
        post(){
            return {
                id: '2827JHDSJD',
                title: 'Blog Post',
                body: 'This is a motherfucking freaking post',
                published: true
            }
        },

        greeting(parent, args, ctx, info){

            if(args.name && args.position){
                return `Hello, ${args.name} I am a ${args.position}`
            }else{
                return 'Motherfucking Fuckoff!'
            }
        },

        add(parent, args, ctx, info){
            if(args.a, args.b){
                return args.a + args.b;
            }
        },

        greetings(parent, args, ctx, info){
            if(args.name){
                return `Hello ${args.name}`;
            }else{
                return 'Motherfucking Fuckoff!';
            }
        },

        grades(parent, args, ctx, info){
            return [99, 80, 93];
        },

        summation(parent, args, ctx, info){

            if(args.number.length == 0){
                return 0;
            }

            if(args.number){
                return args.number.reduce((a, e) => {
                    return a+=e;
                },0);
            }

            return [];

        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('GraphQL Server is running...');
});
