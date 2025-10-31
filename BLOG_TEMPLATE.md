# 📝 Blog Post Template

Copy this template structure to create new blog posts in `/src/data/blog.ts`.

## Template Structure:

```typescript
{
  id: 'unique-post-id', // Use incremental numbers or unique identifiers
  title: 'Your SEO-Optimized Blog Post Title', // Keep under 60 characters
  excerpt: 'A compelling 150-160 character description that will appear in search results, social media previews, and blog listings.',
  content: `
# Your Blog Post Title

## Introduction
Start with a compelling hook that addresses a pain point or introduces an interesting concept. Make it clear what the reader will learn or gain from reading this post.

## Problem/Context (Optional)
If applicable, describe the problem or context that your post addresses. This helps readers understand why the topic matters.

## Main Content Section 1
Break your content into logical sections with clear H2 headings. Each section should cover one main concept.

### Subsection (H3)
Use H3 headings for subsections within main topics.

#### Code Examples
Always include the language specification for syntax highlighting:

\`\`\`javascript
// Example: JavaScript function
const calculateReadingTime = (wordCount) => {
  const wordsPerMinute = 250;
  return Math.ceil(wordCount / wordsPerMinute);
};

console.log(calculateReadingTime(1250)); // Output: 5 minutes
\`\`\`

\`\`\`python
# Example: Python function
def calculate_reading_time(word_count):
    words_per_minute = 250
    return math.ceil(word_count / words_per_minute)

print(calculate_reading_time(1250))  # Output: 5 minutes
\`\`\`

### Lists and Key Points
Use lists to make content scannable:

- **Bold important terms** when first mentioned
- Keep bullet points concise and actionable
- Use parallel structure in your lists
- Include specific examples when possible

#### Numbered lists for processes:
1. First step with clear action
2. Second step building on the first
3. Third step with expected outcome
4. Final step with next actions

## Main Content Section 2
Continue with your next major topic. Maintain consistent formatting and structure.

### Best Practices Section
Include practical tips that readers can immediately apply:

> 💡 **Pro Tip**: Use blockquotes to highlight important insights, warnings, or expert tips that stand out from the main content.

> ⚠️ **Warning**: Use different icons and formatting for different types of callouts.

> ✅ **Best Practice**: Highlight recommended approaches and proven methods.

### Visual Elements
- Include images, diagrams, or screenshots when helpful
- Use alt text for accessibility: ![Description of image](/img/blog/your-image.jpg)
- Keep images optimized (WebP format, proper sizing)

## Advanced Topics (Optional)
If your post covers advanced concepts, clearly mark them and build upon the foundational knowledge established earlier.

### Performance Considerations
- Discuss optimization techniques
- Include benchmarks or metrics when relevant
- Explain trade-offs clearly

## Real-World Examples
Include practical, real-world examples that readers can relate to:

\`\`\`typescript
// Real-world TypeScript example
interface BlogPost {
  id: string;
  title: string;
  publishedAt: Date;
  tags: string[];
}

const createBlogPost = (data: Partial<BlogPost>): BlogPost => {
  return {
    id: generateId(),
    publishedAt: new Date(),
    tags: [],
    ...data,
    title: data.title || 'Untitled Post'
  };
};
\`\`\`

## Common Pitfalls and Solutions
Address common mistakes or misconceptions:

### Pitfall 1: Not Optimizing for SEO
**Problem**: Many developers skip SEO optimization.
**Solution**: Always include meta descriptions, proper headings, and structured data.

### Pitfall 2: Overly Technical Content
**Problem**: Content that's too complex for the target audience.
**Solution**: Explain concepts step-by-step and define technical terms.

## Tools and Resources
Provide helpful resources for readers:

### Recommended Tools:
- [Tool Name](https://example.com) - Brief description of why it's useful
- [Another Tool](https://example.com) - Explain the specific use case

### Further Reading:
- [Related Article 1](https://example.com) - What readers will learn
- [Documentation](https://example.com) - Official docs or references

## Conclusion
Summarize the key takeaways and provide clear next steps:

### Key Takeaways:
1. **Main Point 1**: Brief summary
2. **Main Point 2**: Brief summary  
3. **Main Point 3**: Brief summary

### Next Steps:
- Immediate action readers can take
- Related topics to explore
- How to get help or ask questions

## Call to Action
End with engagement:
- Ask a question to encourage comments
- Invite readers to share their experiences
- Suggest they try the techniques described
- Link to related posts or resources

---

*What's your experience with [topic]? Share your thoughts in the comments or reach out on [social media platform]!*
  `,
  coverImage: '/img/blog/your-cover-image.jpg', // 1200x630px for best social sharing
  publishedAt: '2025-10-31', // Format: YYYY-MM-DD
  tags: ['Technology', 'Tutorial', 'Your-Primary-Tag'], // 3-5 relevant tags
  readingTime: 8, // Estimate: ~250 words per minute
  slug: 'your-seo-friendly-url-slug', // lowercase, hyphens, descriptive
  
  // Enhanced SEO Properties
  seo: {
    metaDescription: 'Optimized meta description with primary keywords and clear value proposition under 160 characters.',
    keywords: [
      'primary keyword',
      'secondary keyword', 
      'related term 1',
      'related term 2',
      'long tail keyword phrase'
    ],
    canonicalUrl: 'https://ashanwithana.com/blog/your-seo-friendly-url-slug',
    ogImage: '/img/blog/your-cover-image.jpg',
    schema: {
      articleType: 'TechnicalArticle', // Options: 'BlogPosting', 'TechnicalArticle', 'Tutorial', 'NewsArticle'
      category: 'Technology', // Main category for organization
      wordCount: 2000, // Approximate word count for SEO
    }
  }
}
```

## Content Writing Guidelines:

### 📊 SEO Best Practices:
- **Title**: Include primary keyword, keep under 60 characters
- **Excerpt**: 150-160 characters, include keywords naturally
- **Headings**: Use H1 (title) → H2 (main sections) → H3 (subsections)
- **Keywords**: Include naturally throughout content, don't stuff
- **Internal Links**: Link to your other blog posts and pages
- **External Links**: Link to authoritative sources

### 🎯 Content Structure:
- **Hook**: Start with attention-grabbing opening
- **Problem**: Define what you're solving
- **Solution**: Provide step-by-step guidance
- **Examples**: Include practical, working code
- **Conclusion**: Summarize and provide next steps

### 📱 Technical Tips:
- **Code Blocks**: Always specify language for syntax highlighting
- **Lists**: Use for scannable content
- **Blockquotes**: Highlight important information
- **Images**: Optimize for web, include alt text
- **Links**: Use descriptive anchor text

### 📈 Engagement Tips:
- **Questions**: Ask questions to encourage interaction
- **Personal Experience**: Share your own insights and learnings
- **Practical Value**: Ensure readers gain actionable knowledge
- **Clear Structure**: Use headings and formatting for easy scanning

## Publishing Checklist:

- [ ] Title is SEO-optimized and under 60 characters
- [ ] Excerpt is compelling and 150-160 characters
- [ ] Content includes practical examples and code snippets
- [ ] All code blocks specify programming language
- [ ] Images are optimized and have alt text
- [ ] Internal and external links are included
- [ ] SEO metadata is complete
- [ ] Reading time is estimated accurately
- [ ] Tags are relevant and specific
- [ ] Slug is URL-friendly and descriptive
- [ ] Content is proofread and edited
- [ ] Call-to-action is included

Ready to publish? Add your blog post to the `blogPosts` array in `/src/data/blog.ts`!