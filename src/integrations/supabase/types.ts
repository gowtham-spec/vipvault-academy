export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      course_categories: {
        Row: {
          color: string
          created_at: string
          id: string
          name: string
        }
        Insert: {
          color: string
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      course_category_mappings: {
        Row: {
          category_id: string | null
          course_id: string | null
          created_at: string
          id: string
        }
        Insert: {
          category_id?: string | null
          course_id?: string | null
          created_at?: string
          id?: string
        }
        Update: {
          category_id?: string | null
          course_id?: string | null
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_category_mappings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "course_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_category_mappings_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_projects: {
        Row: {
          course_id: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          order_index: number
          project_url: string | null
          title: string
        }
        Insert: {
          course_id: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          order_index?: number
          project_url?: string | null
          title: string
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          order_index?: number
          project_url?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_projects_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          background_image_url: string | null
          category: string | null
          created_at: string
          description: string | null
          duration: string | null
          id: string
          image_url: string | null
          instructor_bio: string | null
          instructor_description: string | null
          instructor_experience: string | null
          instructor_image_url: string | null
          instructor_name: string | null
          instructor_title: string | null
          prerequisites: string | null
          session_count: number | null
          session_duration: string | null
          short_description: string | null
          slug: string
          status: Database["public"]["Enums"]["course_status"] | null
          subtitle: string | null
          title: string
          total_duration_months: number | null
          total_lessons: number | null
          updated_at: string
        }
        Insert: {
          background_image_url?: string | null
          category?: string | null
          created_at?: string
          description?: string | null
          duration?: string | null
          id?: string
          image_url?: string | null
          instructor_bio?: string | null
          instructor_description?: string | null
          instructor_experience?: string | null
          instructor_image_url?: string | null
          instructor_name?: string | null
          instructor_title?: string | null
          prerequisites?: string | null
          session_count?: number | null
          session_duration?: string | null
          short_description?: string | null
          slug: string
          status?: Database["public"]["Enums"]["course_status"] | null
          subtitle?: string | null
          title: string
          total_duration_months?: number | null
          total_lessons?: number | null
          updated_at?: string
        }
        Update: {
          background_image_url?: string | null
          category?: string | null
          created_at?: string
          description?: string | null
          duration?: string | null
          id?: string
          image_url?: string | null
          instructor_bio?: string | null
          instructor_description?: string | null
          instructor_experience?: string | null
          instructor_image_url?: string | null
          instructor_name?: string | null
          instructor_title?: string | null
          prerequisites?: string | null
          session_count?: number | null
          session_duration?: string | null
          short_description?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["course_status"] | null
          subtitle?: string | null
          title?: string
          total_duration_months?: number | null
          total_lessons?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          completed_at: string | null
          course_id: string
          enrolled_at: string
          expires_at: string | null
          id: string
          progress_percentage: number | null
          status: Database["public"]["Enums"]["enrollment_status"] | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          course_id: string
          enrolled_at?: string
          expires_at?: string | null
          id?: string
          progress_percentage?: number | null
          status?: Database["public"]["Enums"]["enrollment_status"] | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          course_id?: string
          enrolled_at?: string
          expires_at?: string | null
          id?: string
          progress_percentage?: number | null
          status?: Database["public"]["Enums"]["enrollment_status"] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      learning_outcomes: {
        Row: {
          course_id: string
          created_at: string
          description: string
          icon_name: string | null
          id: string
          order_index: number
          title: string
        }
        Insert: {
          course_id: string
          created_at?: string
          description: string
          icon_name?: string | null
          id?: string
          order_index?: number
          title: string
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string
          icon_name?: string | null
          id?: string
          order_index?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "learning_outcomes_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_progress: {
        Row: {
          completed: boolean | null
          completed_at: string | null
          created_at: string
          id: string
          lesson_id: string
          updated_at: string
          user_id: string
          watch_time_seconds: number | null
        }
        Insert: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          id?: string
          lesson_id: string
          updated_at?: string
          user_id: string
          watch_time_seconds?: number | null
        }
        Update: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          id?: string
          lesson_id?: string
          updated_at?: string
          user_id?: string
          watch_time_seconds?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lesson_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          content: string | null
          course_id: string
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          lesson_type: Database["public"]["Enums"]["lesson_type"] | null
          order_index: number
          title: string
          updated_at: string
          video_url: string | null
        }
        Insert: {
          content?: string | null
          course_id: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          lesson_type?: Database["public"]["Enums"]["lesson_type"] | null
          order_index: number
          title: string
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          content?: string | null
          course_id?: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          lesson_type?: Database["public"]["Enums"]["lesson_type"] | null
          order_index?: number
          title?: string
          updated_at?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      quiz_attempts: {
        Row: {
          answers: Json | null
          attempt_number: number
          created_at: string
          id: string
          passed: boolean
          score: number
          total_questions: number
          user_id: string
          video_id: string
        }
        Insert: {
          answers?: Json | null
          attempt_number?: number
          created_at?: string
          id?: string
          passed?: boolean
          score: number
          total_questions: number
          user_id: string
          video_id: string
        }
        Update: {
          answers?: Json | null
          attempt_number?: number
          created_at?: string
          id?: string
          passed?: boolean
          score?: number
          total_questions?: number
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_quiz_attempts_video_id"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_questions: {
        Row: {
          correct_answer: string
          created_at: string
          id: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          order_index: number
          question_text: string
          video_id: string
        }
        Insert: {
          correct_answer: string
          created_at?: string
          id?: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          order_index?: number
          question_text: string
          video_id: string
        }
        Update: {
          correct_answer?: string
          created_at?: string
          id?: string
          option_a?: string
          option_b?: string
          option_c?: string
          option_d?: string
          order_index?: number
          question_text?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_quiz_questions_video_id"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      syllabus_sections: {
        Row: {
          course_id: string
          created_at: string
          id: string
          order_index: number
          title: string
        }
        Insert: {
          course_id: string
          created_at?: string
          id?: string
          order_index: number
          title: string
        }
        Update: {
          course_id?: string
          created_at?: string
          id?: string
          order_index?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "syllabus_sections_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      syllabus_topics: {
        Row: {
          created_at: string
          id: string
          order_index: number
          section_id: string
          topic: string
        }
        Insert: {
          created_at?: string
          id?: string
          order_index: number
          section_id: string
          topic: string
        }
        Update: {
          created_at?: string
          id?: string
          order_index?: number
          section_id?: string
          topic?: string
        }
        Relationships: [
          {
            foreignKeyName: "syllabus_topics_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "syllabus_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      testimonials: {
        Row: {
          course_id: string
          created_at: string
          id: string
          rating: number | null
          student_name: string
          testimonial_date: string
          testimonial_text: string
        }
        Insert: {
          course_id: string
          created_at?: string
          id?: string
          rating?: number | null
          student_name: string
          testimonial_date: string
          testimonial_text: string
        }
        Update: {
          course_id?: string
          created_at?: string
          id?: string
          rating?: number | null
          student_name?: string
          testimonial_date?: string
          testimonial_text?: string
        }
        Relationships: [
          {
            foreignKeyName: "testimonials_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      video_progress: {
        Row: {
          completed: boolean
          completed_at: string | null
          created_at: string
          id: string
          last_position_seconds: number
          total_duration_seconds: number | null
          updated_at: string
          user_id: string
          video_id: string
          watch_time_seconds: number
        }
        Insert: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          id?: string
          last_position_seconds?: number
          total_duration_seconds?: number | null
          updated_at?: string
          user_id: string
          video_id: string
          watch_time_seconds?: number
        }
        Update: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          id?: string
          last_position_seconds?: number
          total_duration_seconds?: number | null
          updated_at?: string
          user_id?: string
          video_id?: string
          watch_time_seconds?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_video_progress_video_id"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      video_views: {
        Row: {
          course_id: string
          id: string
          user_id: string
          video_url: string
          viewed_at: string
        }
        Insert: {
          course_id: string
          id?: string
          user_id: string
          video_url: string
          viewed_at?: string
        }
        Update: {
          course_id?: string
          id?: string
          user_id?: string
          video_url?: string
          viewed_at?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          course_id: string
          created_at: string
          description: string | null
          duration_seconds: number | null
          file_url: string
          id: string
          order_index: number
          status: string | null
          title: string
          updated_at: string
        }
        Insert: {
          course_id: string
          created_at?: string
          description?: string | null
          duration_seconds?: number | null
          file_url: string
          id?: string
          order_index?: number
          status?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string | null
          duration_seconds?: number | null
          file_url?: string
          id?: string
          order_index?: number
          status?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "videos_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_access_video: {
        Args: {
          p_course_id: string
          p_user_id: string
          p_video_order_index: number
        }
        Returns: boolean
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      course_status: "draft" | "published" | "archived"
      enrollment_status: "active" | "completed" | "dropped" | "suspended"
      lesson_type: "video" | "text" | "quiz" | "assignment"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      course_status: ["draft", "published", "archived"],
      enrollment_status: ["active", "completed", "dropped", "suspended"],
      lesson_type: ["video", "text", "quiz", "assignment"],
    },
  },
} as const
