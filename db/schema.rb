# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170620005605) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "availabilities", force: :cascade do |t|
    t.integer  "spot_id",                       null: false
    t.date     "available_date",                null: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.boolean  "is_available",   default: true, null: false
    t.index ["available_date"], name: "index_availabilities_on_available_date", using: :btree
    t.index ["spot_id"], name: "index_availabilities_on_spot_id", using: :btree
  end

  create_table "booking_statuses", force: :cascade do |t|
    t.string   "status",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["status"], name: "index_booking_statuses_on_status", unique: true, using: :btree
  end

  create_table "bookings", force: :cascade do |t|
    t.integer  "spot_id",        null: false
    t.integer  "status_id",      null: false
    t.date     "start_date",     null: false
    t.date     "end_date",       null: false
    t.integer  "num_guests"
    t.integer  "base_price"
    t.date     "date_requested"
    t.date     "date_approved"
    t.string   "city"
    t.string   "title"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "guest_id"
  end

  create_table "privacy_levels", force: :cascade do |t|
    t.string   "privacy_level", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["privacy_level"], name: "index_privacy_levels_on_privacy_level", using: :btree
  end

  create_table "spots", force: :cascade do |t|
    t.integer  "host_id",                 null: false
    t.string   "title",                   null: false
    t.string   "base_price",              null: false
    t.text     "summary",                 null: false
    t.string   "main_photo_url",          null: false
    t.text     "description"
    t.integer  "privacy_level_id",        null: false
    t.integer  "num_guests",              null: false
    t.integer  "num_bedrooms",            null: false
    t.integer  "num_beds",                null: false
    t.integer  "num_bathrooms",           null: false
    t.string   "street_address",          null: false
    t.integer  "state_id",                null: false
    t.integer  "zipcode",                 null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "city"
    t.string   "main_photo_file_name"
    t.string   "main_photo_content_type"
    t.integer  "main_photo_file_size"
    t.datetime "main_photo_updated_at"
    t.float    "latitude"
    t.float    "longitude"
    t.index ["host_id"], name: "index_spots_on_host_id", using: :btree
    t.index ["privacy_level_id"], name: "index_spots_on_privacy_level_id", using: :btree
    t.index ["state_id"], name: "index_spots_on_state_id", using: :btree
  end

  create_table "states", force: :cascade do |t|
    t.string   "state_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["state_name"], name: "index_states_on_state_name", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest"
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "avatar_url"
    t.index ["email"], name: "index_users_on_email", using: :btree
  end

  add_foreign_key "availabilities", "spots"
end
