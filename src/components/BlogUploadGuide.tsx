
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, FileText, Upload, CheckCircle } from "lucide-react";

const BlogUploadGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">How to Upload Blog Posts</h1>
        <p className="text-muted-foreground">Easy steps to add new blog content to your website</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Method 1: Direct Database */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Method 1: Direct Database
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Recommended
            </Badge>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-0.5">1</div>
                <div>
                  <p className="font-medium">Access Supabase Dashboard</p>
                  <p className="text-sm text-muted-foreground">Go to your Supabase project dashboard</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-0.5">2</div>
                <div>
                  <p className="font-medium">Navigate to Table Editor</p>
                  <p className="text-sm text-muted-foreground">Find the "blogs" table</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-0.5">3</div>
                <div>
                  <p className="font-medium">Insert New Row</p>
                  <p className="text-sm text-muted-foreground">Click "Insert" and fill in the required fields</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-0.5">4</div>
                <div>
                  <p className="font-medium">Set is_published to true</p>
                  <p className="text-sm text-muted-foreground">Make sure to check this to make it live</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Required Fields:</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• <strong>title</strong>: Your blog post title</li>
                <li>• <strong>slug</strong>: URL-friendly version (e.g., "my-blog-post")</li>
                <li>• <strong>content</strong>: Your markdown content</li>
                <li>• <strong>excerpt</strong>: Short description</li>
                <li>• <strong>category</strong>: Post category</li>
                <li>• <strong>tags</strong>: Array of tags</li>
                <li>• <strong>is_published</strong>: Set to true</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Method 2: Admin Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Method 2: Admin Interface
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Future Enhancement
            </Badge>
            
            <p className="text-sm text-muted-foreground">
              You can create an admin panel with a rich text editor for easier blog management. This would include:
            </p>
            
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Rich markdown editor
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Live preview
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Image upload functionality
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                SEO meta fields
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Publishing workflow
              </li>
            </ul>
            
            <p className="text-sm text-muted-foreground italic">
              Let me know if you'd like me to build this admin interface for you!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Markdown Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Markdown Formatting Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Headers</h4>
              <code className="block bg-muted p-2 rounded text-sm">
                # Heading 1<br/>
                ## Heading 2<br/>
                ### Heading 3
              </code>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Text Formatting</h4>
              <code className="block bg-muted p-2 rounded text-sm">
                **Bold text**<br/>
                *Italic text*<br/>
                `Inline code`
              </code>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Lists</h4>
              <code className="block bg-muted p-2 rounded text-sm">
                - Bullet point<br/>
                1. Numbered item<br/>
                2. Another item
              </code>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Tables</h4>
              <code className="block bg-muted p-2 rounded text-sm">
                | Header 1 | Header 2 |<br/>
                |----------|----------|<br/>
                | Cell 1   | Cell 2   |
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogUploadGuide;
