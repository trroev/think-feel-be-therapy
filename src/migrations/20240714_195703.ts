import { sql, type MigrateDownArgs, type MigrateUpArgs } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_pages_page_header_background_color" AS ENUM('brandPrimary', 'brandSecondary', 'brandTertiary', 'brandQuaternary', 'transparent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_accordion_block_type" AS ENUM('multiple', 'single');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_cta_block_background_color" AS ENUM('brandPrimary', 'brandSecondary', 'brandTertiary', 'brandQuaternary', 'transparent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_cta_block_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_background_color" AS ENUM('brandPrimary', 'brandSecondary', 'brandTertiary', 'brandQuaternary', 'transparent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_heading_font_weight" AS ENUM('thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_section_block_background_color" AS ENUM('brandPrimary', 'brandSecondary', 'brandTertiary', 'brandQuaternary', 'transparent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_section_block_heading_alignment" AS ENUM('left', 'center', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_page_header_background_color" AS ENUM('brandPrimary', 'brandSecondary', 'brandTertiary', 'brandQuaternary', 'transparent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_accordion_block_type" AS ENUM('multiple', 'single');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_cta_block_background_color" AS ENUM('brandPrimary', 'brandSecondary', 'brandTertiary', 'brandQuaternary', 'transparent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_cta_block_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_background_color" AS ENUM('brandPrimary', 'brandSecondary', 'brandTertiary', 'brandQuaternary', 'transparent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_heading_font_weight" AS ENUM('thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_section_block_background_color" AS ENUM('brandPrimary', 'brandSecondary', 'brandTertiary', 'brandQuaternary', 'transparent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_section_block_heading_alignment" AS ENUM('left', 'center', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_footer_badge_group_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "pages_blocks_accordion_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading" varchar,
	"content" jsonb,
	"content_html" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_accordion_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"type" "enum_pages_blocks_accordion_block_type",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_cta_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_pages_blocks_cta_block_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_cta_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"backgroundColor" "enum_pages_blocks_cta_block_background_color",
	"image_id" integer,
	"heading" varchar,
	"subheading" varchar,
	"body" jsonb,
	"body_html" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block_tagline_words" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"word" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"backgroundColor" "enum_pages_blocks_hero_block_background_color",
	"image_id" integer,
	"heading" varchar,
	"headingFontWeight" "enum_pages_blocks_hero_block_heading_font_weight",
	"subheading" varchar,
	"add_tagline" boolean,
	"tagline_static_heading" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_mentaya_widget_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"full_width" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_text_section_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"backgroundColor" "enum_pages_blocks_text_section_block_background_color",
	"heading" varchar,
	"headingAlignment" "enum_pages_blocks_text_section_block_heading_alignment",
	"subheading" varchar,
	"body" jsonb,
	"body_html" varchar,
	"image_id" integer,
	"image_first" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"published_at" timestamp(3) with time zone,
	"page_header_heading" varchar,
	"page_header_subheading" varchar,
	"pageHeader_backgroundColor" "enum_pages_page_header_background_color",
	"slug" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_pages_status"
);

CREATE TABLE IF NOT EXISTS "pages_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_accordion_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"heading" varchar,
	"content" jsonb,
	"content_html" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_accordion_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"type" "enum__pages_v_blocks_accordion_block_type",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__pages_v_blocks_cta_block_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"backgroundColor" "enum__pages_v_blocks_cta_block_background_color",
	"image_id" integer,
	"heading" varchar,
	"subheading" varchar,
	"body" jsonb,
	"body_html" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block_tagline_words" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"word" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"backgroundColor" "enum__pages_v_blocks_hero_block_background_color",
	"image_id" integer,
	"heading" varchar,
	"headingFontWeight" "enum__pages_v_blocks_hero_block_heading_font_weight",
	"subheading" varchar,
	"add_tagline" boolean,
	"tagline_static_heading" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_mentaya_widget_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"full_width" boolean,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_section_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"backgroundColor" "enum__pages_v_blocks_text_section_block_background_color",
	"heading" varchar,
	"headingAlignment" "enum__pages_v_blocks_text_section_block_heading_alignment",
	"subheading" varchar,
	"body" jsonb,
	"body_html" varchar,
	"image_id" integer,
	"image_first" boolean,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_title" varchar,
	"version_published_at" timestamp(3) with time zone,
	"version_page_header_heading" varchar,
	"version_page_header_subheading" varchar,
	"version_pageHeader_backgroundColor" "enum__pages_v_version_page_header_background_color",
	"version_slug" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__pages_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "footer_badge_group" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"badge_id" integer NOT NULL,
	"link_type" "enum_footer_badge_group_link_type",
	"link_new_tab" boolean,
	"link_url" varchar
);

CREATE TABLE IF NOT EXISTS "footer" (
	"id" serial PRIMARY KEY NOT NULL,
	"terms_of_service_heading" varchar,
	"terms_of_service_subheading" varchar,
	"terms_of_service_terms_of_service_content" jsonb,
	"terms_of_service_termsofservicecontent_html" varchar,
	"privacy_policy_heading" varchar,
	"privacy_policy_subheading" varchar,
	"privacy_policy_privacy_policy_content" jsonb,
	"privacy_policy_privacypolicycontent_html" varchar,
	"disclaimer_heading" varchar,
	"disclaimer_subheading" varchar,
	"disclaimer_disclaimer_content" jsonb,
	"disclaimer_disclaimercontent_html" varchar,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "footer_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "navigation_nav_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"link_id" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "navigation" (
	"id" serial PRIMARY KEY NOT NULL,
	"logo_id" integer NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");
CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_items_order_idx" ON "pages_blocks_accordion_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_items_parent_id_idx" ON "pages_blocks_accordion_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_order_idx" ON "pages_blocks_accordion_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_parent_id_idx" ON "pages_blocks_accordion_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_path_idx" ON "pages_blocks_accordion_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_block_links_order_idx" ON "pages_blocks_cta_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_block_links_parent_id_idx" ON "pages_blocks_cta_block_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_block_order_idx" ON "pages_blocks_cta_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_block_parent_id_idx" ON "pages_blocks_cta_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_block_path_idx" ON "pages_blocks_cta_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_tagline_words_order_idx" ON "pages_blocks_hero_block_tagline_words" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_tagline_words_parent_id_idx" ON "pages_blocks_hero_block_tagline_words" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_order_idx" ON "pages_blocks_hero_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_parent_id_idx" ON "pages_blocks_hero_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_path_idx" ON "pages_blocks_hero_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_mentaya_widget_block_order_idx" ON "pages_blocks_mentaya_widget_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_mentaya_widget_block_parent_id_idx" ON "pages_blocks_mentaya_widget_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_mentaya_widget_block_path_idx" ON "pages_blocks_mentaya_widget_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_section_block_order_idx" ON "pages_blocks_text_section_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_section_block_parent_id_idx" ON "pages_blocks_text_section_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_section_block_path_idx" ON "pages_blocks_text_section_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" ("slug");
CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" ("created_at");
CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" ("order");
CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" ("path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_accordion_block_items_order_idx" ON "_pages_v_blocks_accordion_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_accordion_block_items_parent_id_idx" ON "_pages_v_blocks_accordion_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_accordion_block_order_idx" ON "_pages_v_blocks_accordion_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_accordion_block_parent_id_idx" ON "_pages_v_blocks_accordion_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_accordion_block_path_idx" ON "_pages_v_blocks_accordion_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_block_links_order_idx" ON "_pages_v_blocks_cta_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_block_links_parent_id_idx" ON "_pages_v_blocks_cta_block_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_block_order_idx" ON "_pages_v_blocks_cta_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_block_parent_id_idx" ON "_pages_v_blocks_cta_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_block_path_idx" ON "_pages_v_blocks_cta_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_tagline_words_order_idx" ON "_pages_v_blocks_hero_block_tagline_words" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_tagline_words_parent_id_idx" ON "_pages_v_blocks_hero_block_tagline_words" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_order_idx" ON "_pages_v_blocks_hero_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_parent_id_idx" ON "_pages_v_blocks_hero_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_path_idx" ON "_pages_v_blocks_hero_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_mentaya_widget_block_order_idx" ON "_pages_v_blocks_mentaya_widget_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_mentaya_widget_block_parent_id_idx" ON "_pages_v_blocks_mentaya_widget_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_mentaya_widget_block_path_idx" ON "_pages_v_blocks_mentaya_widget_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_section_block_order_idx" ON "_pages_v_blocks_text_section_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_section_block_parent_id_idx" ON "_pages_v_blocks_text_section_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_section_block_path_idx" ON "_pages_v_blocks_text_section_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" ("version_slug");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" ("latest");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
CREATE INDEX IF NOT EXISTS "footer_badge_group_order_idx" ON "footer_badge_group" ("_order");
CREATE INDEX IF NOT EXISTS "footer_badge_group_parent_id_idx" ON "footer_badge_group" ("_parent_id");
CREATE INDEX IF NOT EXISTS "footer_rels_order_idx" ON "footer_rels" ("order");
CREATE INDEX IF NOT EXISTS "footer_rels_parent_idx" ON "footer_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "footer_rels_path_idx" ON "footer_rels" ("path");
CREATE INDEX IF NOT EXISTS "navigation_nav_items_order_idx" ON "navigation_nav_items" ("_order");
CREATE INDEX IF NOT EXISTS "navigation_nav_items_parent_id_idx" ON "navigation_nav_items" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_accordion_block_items" ADD CONSTRAINT "pages_blocks_accordion_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_accordion_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_accordion_block" ADD CONSTRAINT "pages_blocks_accordion_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cta_block_links" ADD CONSTRAINT "pages_blocks_cta_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_cta_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cta_block" ADD CONSTRAINT "pages_blocks_cta_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cta_block" ADD CONSTRAINT "pages_blocks_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block_tagline_words" ADD CONSTRAINT "pages_blocks_hero_block_tagline_words_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_mentaya_widget_block" ADD CONSTRAINT "pages_blocks_mentaya_widget_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_section_block" ADD CONSTRAINT "pages_blocks_text_section_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_section_block" ADD CONSTRAINT "pages_blocks_text_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_accordion_block_items" ADD CONSTRAINT "_pages_v_blocks_accordion_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_accordion_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_accordion_block" ADD CONSTRAINT "_pages_v_blocks_accordion_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cta_block_links" ADD CONSTRAINT "_pages_v_blocks_cta_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_cta_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cta_block" ADD CONSTRAINT "_pages_v_blocks_cta_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cta_block" ADD CONSTRAINT "_pages_v_blocks_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block_tagline_words" ADD CONSTRAINT "_pages_v_blocks_hero_block_tagline_words_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_mentaya_widget_block" ADD CONSTRAINT "_pages_v_blocks_mentaya_widget_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_section_block" ADD CONSTRAINT "_pages_v_blocks_text_section_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_section_block" ADD CONSTRAINT "_pages_v_blocks_text_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_badge_group" ADD CONSTRAINT "footer_badge_group_badge_id_media_id_fk" FOREIGN KEY ("badge_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_badge_group" ADD CONSTRAINT "footer_badge_group_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "navigation_nav_items" ADD CONSTRAINT "navigation_nav_items_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "navigation_nav_items" ADD CONSTRAINT "navigation_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "navigation"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "navigation" ADD CONSTRAINT "navigation_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
 DROP TABLE "media";
DROP TABLE "pages_blocks_accordion_block_items";
DROP TABLE "pages_blocks_accordion_block";
DROP TABLE "pages_blocks_cta_block_links";
DROP TABLE "pages_blocks_cta_block";
DROP TABLE "pages_blocks_hero_block_tagline_words";
DROP TABLE "pages_blocks_hero_block";
DROP TABLE "pages_blocks_mentaya_widget_block";
DROP TABLE "pages_blocks_text_section_block";
DROP TABLE "pages";
DROP TABLE "pages_rels";
DROP TABLE "_pages_v_blocks_accordion_block_items";
DROP TABLE "_pages_v_blocks_accordion_block";
DROP TABLE "_pages_v_blocks_cta_block_links";
DROP TABLE "_pages_v_blocks_cta_block";
DROP TABLE "_pages_v_blocks_hero_block_tagline_words";
DROP TABLE "_pages_v_blocks_hero_block";
DROP TABLE "_pages_v_blocks_mentaya_widget_block";
DROP TABLE "_pages_v_blocks_text_section_block";
DROP TABLE "_pages_v";
DROP TABLE "_pages_v_rels";
DROP TABLE "users";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";
DROP TABLE "footer_badge_group";
DROP TABLE "footer";
DROP TABLE "footer_rels";
DROP TABLE "navigation_nav_items";
DROP TABLE "navigation";`)
}
