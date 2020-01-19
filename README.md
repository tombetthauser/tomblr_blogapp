# tomblr

A full-stack portfolio project focused on building a set of features such as user authentication loosely based on the UI, structure and functionality of tumblr, a platform designed to help bots and confused teenagers create a rich ecosystem of confusing content and interactions.

## less awful than tumblr

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## key features

The basic features that the initial version of the project will include.

```
• user authentication
• basic crud functionality for individual blog pages
• basic crud functionality for individual image / text posts
• a main timeline / feed where user posts are displayed chronologically
```

## possible features

More features that should probably be included in the initial version of the project if possible.

```
• different options / templates for blog layouts
• ability to like posts made by other users
• ability to comment on other users posts
• searchable terms to filter main post feed (regional / topic-based etc.)
• ability to add location, subject matter etc tags on posts for searches
```

## extra features

Dream features that might be too time-consuming or complex to realistically employ in the near-term.

```
• ability to follow particular users (or regional / topic-based groups)
• a personalized feed when logged in showing followed users / subjects
• custom CNAME / DNS rerouting allowing users to use custom domain names
• a filterable open api for the main feed and / or individual blogs
• limited custom html editing for user blog pages
```

## database structure

A rough draft of the schema for the tomblr database including only the key features (not including the extra features).

### users table

Definitely necessary, could include blog information as well but thought it might be a good idea to split them?

```
• username (string)
• status text (text)
• profile picture (blob? / url?)
• password digest (string)
• session token (string)
• blog id (foreign key)
```

### blogs table

Shown as seperate from users table but might not be strictly necessary to split them.

```
• layout id (foreign key)
• posts id (for joins table)
• session token (string)
• profile picture (blob? / url?)
• bio text (text)
• 
```

### posts table

Definitely necessary and needs to be it's own seperate table, not sure if this would need a joins table.

```
• username (string)
• password digest (string)
• session token (string)
• profile picture (blob? / url?)
• bio text (text)
```

### comments table

Probably possible / realistic to include in the first version of the project.

```
• blog id (foreign key)
• post id (foreign key)
• user id (foreign key)
• comment body (text)
• like count (maybe upvote based)
```

### follows table

Might not be possible / realistic to include in the first version of the project.

```
• followed user id (foreign key)
• following user id (foreign key)
```
<!-- 

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
 -->
